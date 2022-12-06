import { useEffect, useState } from 'react';

import { createAudio, pause, play } from './logic';

export const useAudioPlayer = (url: string) => {
  const [audioToPlay, setAudioToPlay] = useState<
    HTMLAudioElement | undefined
  >();
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audioToPlay?.load();
    if (url) {
      const newAudio = createAudio(url);
      setAudioToPlay(newAudio);
      play(newAudio);
      setPlaying(true);
    }
  }, [url]);

  useEffect(() => {
    if (audioToPlay) {
      if (playing) {
        play(audioToPlay);
      } else {
        pause(audioToPlay);
      }
    }
  }, [playing]);

  useEffect(() => {
    if (audioToPlay) {
      audioToPlay.addEventListener('ended', () => setPlaying(false));
    }
    return () => {
      if (audioToPlay) {
        audioToPlay.removeEventListener('ended', () => setPlaying(false));
      }
    };
  }, []);
  return { playing, toggle, pause, setPlaying };
};
