export const play = (audio: HTMLAudioElement) => {
  if (audio) void audio.play().then(() => console.log('this will succeed'));
};
export const pause = (audio: HTMLAudioElement) => {
  if (audio) audio.pause();
};

export const createAudio = (srcLink: string) => {
  const newAudio = new Audio(srcLink);
  newAudio.load();
  return newAudio;
};
