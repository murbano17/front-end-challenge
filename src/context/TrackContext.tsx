import { AudioState } from '$/containers/Views/Home/types';
import { createContext, MutableRefObject, useContext } from 'react';

import { SongData } from '../types/Song';

type TrackContextType = {
  audioRef?: MutableRefObject<HTMLAudioElement | undefined>;
  isPlaying: boolean;
  currentSong: SongData | undefined;
  setTrackIndex: (index: number) => void;
  setIsPlaying: (state: boolean) => void;
  songs: SongData[] | undefined;
  audioState: AudioState;
  setAudioState: (state: AudioState) => void;
};

const INITIAL_STATE = {
  isPlaying: false,
  currentSong: undefined,
  setTrackIndex: () => {},
  setIsPlaying: () => {},
  songs: undefined,
  audioState: { duration: 0, currentTime: 0 },
  setAudioState: () => {},
};

export const TrackContext = createContext<TrackContextType>(INITIAL_STATE);

export const useTrackContext = () => useContext(TrackContext);
