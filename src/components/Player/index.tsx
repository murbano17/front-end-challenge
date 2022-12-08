import { SlideBar } from '$/components/SlideBar';
import { SongImage } from '$/components/Song/styles';
import { useTrackContext } from '$/context/TrackContext';

import {
  BackwardIcon,
  Button,
  ContainerColumn,
  ContainerRow,
  CoverImageContainter,
  FixedPlayer,
  ForwardIcon,
  PauseIconBig,
  PlayIconBig,
  Text,
  ToggleButton,
} from './styles';
import { PlayerProps } from './types';

export const Player = ({ nextTrack, previousTrack }: PlayerProps) => {
  const { currentSong, isPlaying, setIsPlaying } = useTrackContext();
  return (
    <FixedPlayer>
      <ContainerRow>
        <CoverImageContainter>
          <SongImage src={currentSong?.image} />
        </CoverImageContainter>
        <ContainerColumn>
          <Text>{currentSong?.name}</Text>
          <Text>{currentSong?.author.name}</Text>
        </ContainerColumn>
      </ContainerRow>
      <ContainerRow>
        <Button onClick={previousTrack}>
          <BackwardIcon />
        </Button>
        <ToggleButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <PauseIconBig /> : <PlayIconBig />}
        </ToggleButton>
        <Button onClick={nextTrack}>
          <ForwardIcon />
        </Button>
      </ContainerRow>
      <SlideBar />
    </FixedPlayer>
  );
};
