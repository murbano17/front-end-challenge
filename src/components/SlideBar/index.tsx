import { useTrackContext } from '$/context/TrackContext';

import { secondsToMinutsFormat } from './logic';

export const SlideBar = () => {
  const { audioState, setAudioState, audioRef } = useTrackContext();
  const { duration, currentTime } = audioState;

  const onScrub = (value: number) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = value;
      setAudioState({ ...audioState, currentTime: value });
    }
  };

  return (
    <>
      <p>{secondsToMinutsFormat(currentTime)}</p>
      <input
        type="range"
        value={currentTime}
        step="1"
        min="0"
        max={duration}
        onChange={(e) => onScrub(Number(e.target.value))}
      />
      <p>{secondsToMinutsFormat(duration)}</p>
    </>
  );
};
