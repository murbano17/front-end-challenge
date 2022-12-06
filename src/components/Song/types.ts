import { SongData } from '$/types/Song';

export interface SongProps {
  key: React.Key;
  song: SongData;
  toggle: (song: SongData) => void;
}
