const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const secondsToMinutsFormat = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  return result;
};
