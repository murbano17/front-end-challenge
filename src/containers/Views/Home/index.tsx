import { Player } from '$/components/Player';
import { SongList } from '$/components/SongList';
import { Spinner } from '$/components/Spinner';
import { Text } from '$/components/Text';
import { TrackContext } from '$/context/TrackContext';
import { SongData, SongResults } from '$/types/Song';
import { gql, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';

import {
  createAudio,
  getNextTrackIndex,
  getPreviousTrackIndex,
  pause,
  play,
} from './logic';
import { Container, SearchInput } from './styles';
import { AudioState } from './types';

const SONGS = gql`
  query GetSongs {
    songs {
      songs {
        audio {
          autoPlay
          id
          url
        }
        author {
          description
          id
          name
        }
        description
        genre
        id
        image
        name
      }
    }
  }
`;

const { Provider } = TrackContext;

function HomeView(): JSX.Element {
  const { loading, error, data } = useQuery<SongResults>(SONGS);
  const [trackIndex, setTrackIndex] = useState(0);
  const [audioState, setAudioState] = useState<AudioState>({
    currentTime: 0,
    duration: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayPlayer, setDisplayPlayer] = useState(false);

  const currentSong: SongData | undefined = data?.songs.songs[trackIndex];
  const audioRef = useRef<HTMLAudioElement | undefined>();

  const previousTrack = () => {
    if (data?.songs.songs) {
      setTrackIndex(getPreviousTrackIndex(data.songs.songs, trackIndex));
    }
  };

  const nextTrack = () => {
    if (data?.songs.songs) {
      setTrackIndex(getNextTrackIndex(data.songs.songs, trackIndex));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', () =>
        setAudioState({
          currentTime: audioRef.current?.currentTime || 0,
          duration: audioRef.current?.duration || 0,
        }),
      );
    }
    return () => {
      audioRef?.current?.removeEventListener('timeupdate', () =>
        setAudioState({
          currentTime: audioRef.current?.currentTime || 0,
          duration: audioRef.current?.duration || 0,
        }),
      );
    };
  }, [audioRef.current]);

  useEffect(() => {
    if (!loading && currentSong)
      audioRef.current = createAudio(currentSong.audio.url);
  }, [loading]);

  //Play the next song when current song is ended
  useEffect(() => {
    if (audioRef.current?.ended) nextTrack();
  }, [audioRef.current?.ended]);

  useEffect(() => {
    if (isPlaying) {
      setDisplayPlayer(true);
      play(audioRef?.current);
    } else {
      pause(audioRef.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentSong) {
      pause(audioRef.current);
      audioRef.current = createAudio(currentSong.audio.url);
      play(audioRef.current);
      setIsPlaying(true);
    }
  }, [trackIndex]);

  return (
    <Provider
      value={{
        audioRef,
        isPlaying,
        currentSong,
        setTrackIndex,
        setIsPlaying,
        songs: data?.songs.songs,
        audioState,
        setAudioState,
      }}
    >
      <Container>
        <Text tag="h1" variant="title1">
          Explore
        </Text>
        <SearchInput placeholder="Search by title, genre..." />
        {loading || !data?.songs ? (
          <Spinner />
        ) : (
          <SongList songs={data.songs.songs} />
        )}
        {currentSong && displayPlayer && (
          <Player {...{ previousTrack, nextTrack }} />
        )}
      </Container>
    </Provider>
  );
}

export default HomeView;
