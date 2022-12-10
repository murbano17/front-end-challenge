import { secondsToMinutsFormat } from '$/components/SlideBar/logic';
import { Text } from '$/components/Text';
import { findIndexSong } from '$/containers/Views/Home/logic';
import { useTrackContext } from '$/context/TrackContext';
import { useEffect, useState } from 'react';

import {
  AddFav,
  ContainerRow,
  FavIcon,
  PauseIcon,
  PlayIcon,
  RoundButton,
  SongImage,
  SongImageContainer,
  SongInfo,
  SongItem,
  Tag,
  TransparentButton,
} from './styles';
import { SongProps } from './types';

export const Song = ({ song }: SongProps) => {
  const {
    songs,
    isPlaying,
    currentSong,
    setTrackIndex,
    setIsPlaying,
    addFavSong,
    removeSong,
    idsFavSongs,
  } = useTrackContext();

  const [duration, setDuration] = useState<string>();
  const indexSong = (songs && findIndexSong(songs, song)) || 0;

  const isFavSong = () => (idsFavSongs?.includes(song.id) ? true : false);
  const isThisTheCurrentSong = () =>
    song.id === currentSong?.id ? true : false;

  const getDuration = () => {
    const audio = new Audio(song.audio.url);
    audio.addEventListener('loadedmetadata', () => {
      const durationSong = Number(audio.duration);
      setDuration(secondsToMinutsFormat(durationSong));
    });
  };

  useEffect(() => {
    getDuration();
  }, []);

  return (
    <SongItem>
      <SongImageContainer>
        <SongImage src={song.image} alt={`cover image ${song.name}`} />
      </SongImageContainer>
      <SongInfo>
        <Text tag="p" variant="bodyBold">
          {song.name}
        </Text>
        <Text tag="p" variant="nameBold">
          {song.author.name}
        </Text>
        <Text tag="p" variant="description">
          {song.description}
        </Text>
        <ContainerRow>
          {!isPlaying && (
            <RoundButton
              onClick={
                isThisTheCurrentSong()
                  ? () => setIsPlaying(true)
                  : () => setTrackIndex(indexSong)
              }
            >
              <PlayIcon />
            </RoundButton>
          )}
          {isPlaying && (
            <RoundButton
              onClick={
                isThisTheCurrentSong()
                  ? () => setIsPlaying(false)
                  : () => setTrackIndex(indexSong)
              }
            >
              {isThisTheCurrentSong() ? <PauseIcon /> : <PlayIcon />}
            </RoundButton>
          )}

          <Text tag="p" variant="description">
            {duration} min
          </Text>
          <Tag>{song.genre}</Tag>
        </ContainerRow>
      </SongInfo>
      {isFavSong() ? (
        <TransparentButton onClick={() => removeSong(song.id)}>
          <FavIcon />
        </TransparentButton>
      ) : (
        <TransparentButton onClick={() => addFavSong(song.id)}>
          <AddFav />
        </TransparentButton>
      )}
    </SongItem>
  );
};
