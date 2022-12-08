import { Text } from '$/components/Text';
import { findIndexSong } from '$/containers/Views/Home/logic';
import { useTrackContext } from '$/context/TrackContext';

import {
  PauseIcon,
  PlayIcon,
  RoundButton,
  SongImage,
  SongImageContainer,
  SongInfo,
  SongItem,
} from './styles';
import { SongProps } from './types';

export const Song = ({ song }: SongProps) => {
  const { songs, isPlaying, currentSong, setTrackIndex, setIsPlaying } =
    useTrackContext();

  const indexSong = (songs && findIndexSong(songs, song)) || 0;

  const isThisTheCurrentSong = () =>
    song.id === currentSong?.id ? true : false;

  return (
    <SongItem>
      <SongImageContainer>
        <SongImage src={song.image} alt={`cover image ${song.name}`} />
      </SongImageContainer>
      <SongInfo>
        <Text tag="p" variant="bodyBold">
          {song.name}
        </Text>
        <Text tag="p" variant="body">
          {song.author.name}
        </Text>
        <Text tag="p" variant="body">
          {song.description}
        </Text>
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
      </SongInfo>
    </SongItem>
  );
};
