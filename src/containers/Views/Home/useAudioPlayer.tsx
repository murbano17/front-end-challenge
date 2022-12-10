import { SongData } from '$/types/Song';
import { useEffect, useRef, useState } from 'react';

import {
  createAudio,
  getNextTrackIndex,
  getPreviousTrackIndex,
  pause,
  play,
} from './logic';
import { AudioState, UseAudioPlayerProps } from './types';

export const useAudioPlayer = ({ songs, loading }: UseAudioPlayerProps) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [audioState, setAudioState] = useState<AudioState>({
    currentTime: 0,
    duration: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayPlayer, setDisplayPlayer] = useState(false);

  const currentSong: SongData | undefined = songs?.[trackIndex];
  const audioRef = useRef<HTMLAudioElement | undefined>();

  const previousTrack = () => {
    if (songs) {
      setTrackIndex(getPreviousTrackIndex(songs, trackIndex));
    }
  };

  const nextTrack = () => {
    if (songs) {
      setTrackIndex(getNextTrackIndex(songs, trackIndex));
    }
  };

  useEffect(() => {
    if (!loading && currentSong)
      audioRef.current = createAudio(currentSong.audio.url);
  }, [loading]);

  //Play the next song when current song is ended
  useEffect(() => {
    if (audioRef.current?.ended) {
      setAudioState({
        currentTime: 0,
        duration: 0,
      });
      nextTrack();
    }
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

  useEffect(() => {
    if (currentSong && audioRef.current) {
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
  }, [trackIndex, audioRef.current]);

  return {
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
  };
};
