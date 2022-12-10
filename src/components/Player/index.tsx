import { Controls } from '$/components/Controls';
import { SlideBar } from '$/components/SlideBar';
import { SongInfo } from '$/components/SongInfo';
import { useTrackContext } from '$/context/TrackContext';

import { FixedPlayer } from './styles';
import { PlayerProps } from './types';

export const Player = ({ nextTrack, previousTrack }: PlayerProps) => {
  const { currentSong } = useTrackContext();
  return (
    <FixedPlayer>
      <SongInfo {...{ currentSong }} />
      <Controls {...{ nextTrack, previousTrack }} />
      <SlideBar />
    </FixedPlayer>
  );
};
