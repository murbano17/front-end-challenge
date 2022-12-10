import { Player } from '$/components/Player';
import { SongList } from '$/components/SongList';
import { Spinner } from '$/components/Spinner';
import { Text } from '$/components/Text';
import { TrackContext } from '$/context/TrackContext';
import { SongResults } from '$/types/Song';
import { gql, useQuery } from '@apollo/client';

import { Container, SearchInput } from './styles';
import { useAudioPlayer } from './useAudioPlayer';
import { useLocalStorage } from './useLocalStorage';

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
  const { loading, data } = useQuery<SongResults>(SONGS);
  const songs = data?.songs.songs;

  const { addFavSong, removeSong, idsFavSongs } = useLocalStorage();
  const {
    audioState,
    setAudioState,
    audioRef,
    isPlaying,
    currentSong,
    setTrackIndex,
    setIsPlaying,
    displayPlayer,
    nextTrack,
    previousTrack,
  } = useAudioPlayer({ songs, loading });

  return (
    <Provider
      value={{
        audioRef,
        isPlaying,
        currentSong,
        setTrackIndex,
        setIsPlaying,
        songs,
        audioState,
        setAudioState,
        addFavSong,
        removeSong,
        idsFavSongs,
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
