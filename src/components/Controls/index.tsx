import { PlayerProps } from '$/components/Player/types';
import { useTrackContext } from '$/context/TrackContext';

import {
  BackwardIcon,
  Button,
  ForwardIcon,
  PauseIconBig,
  PlayIconBig,
  ToggleButton,
  Wrapper,
} from './styles';

export const Controls = ({ nextTrack, previousTrack }: PlayerProps) => {
  const { isPlaying, setIsPlaying } = useTrackContext();
  return (
    <Wrapper>
      <Button onClick={previousTrack}>
        <BackwardIcon />
      </Button>
      <ToggleButton onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <PauseIconBig /> : <PlayIconBig />}
      </ToggleButton>
      <Button onClick={nextTrack}>
        <ForwardIcon />
      </Button>
    </Wrapper>
  );
};
