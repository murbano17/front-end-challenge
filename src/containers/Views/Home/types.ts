export interface PlaySongContextType {
  currentSong: SongData | undefined;
  toggle: (song: SongData) => void;
}
