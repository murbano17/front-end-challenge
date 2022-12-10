import { SongData } from '$/types/Song';
export interface AudioState {
  currentTime: number;
  duration: number;
}

export interface UseAudioPlayerProps {
  loading: boolean;
  songs: SongData[] | undefined;
}
