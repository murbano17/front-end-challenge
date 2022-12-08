import { SongData } from '$/types/Song';

export const createAudio = (url: string) => new Audio(url);

export const play = (audio: HTMLAudioElement | undefined) => {
  if (audio) void audio.play().then(() => console.log('song playing!'));
};
export const pause = (audio: HTMLAudioElement | undefined) => {
  if (audio) audio.pause();
};

export const findIndexSong = (songs: SongData[], songToPlay: SongData) => {
  const indexSong = songs.findIndex(
    (song: SongData) => song.id === songToPlay?.id,
  );
  return indexSong;
};

//Return index of the last track if the
// current one is the first in the track list
export const getPreviousTrackIndex = (
  songs: SongData[],
  trackIndex: number,
) => {
  let previousTrackIndex;
  return trackIndex > 0
    ? (previousTrackIndex = trackIndex - 1)
    : (previousTrackIndex = songs.length - 1);
};

//Return index of the first track if the
// current one is the last in the track list
export const getNextTrackIndex = (songs: SongData[], trackIndex: number) => {
  let nextTrackIndex;
  return trackIndex < songs.length - 1
    ? (nextTrackIndex = trackIndex + 1)
    : (nextTrackIndex = 0);
};
