import { useEffect, useState } from 'react';
const key = 'favSongsIds';

export const useLocalStorage = () => {
  const [idsFavSongs, setIdsFavSongs] = useState<number[]>();

  const getFavIdsLocalStorage = () => {
    const localStorageItems = localStorage.getItem(key);
    if (typeof localStorageItems === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setIdsFavSongs(JSON.parse(localStorageItems));
    }
  };
  useEffect(() => {
    getFavIdsLocalStorage();
  }, []);

  const addFavSong = (id: number) =>
    idsFavSongs ? setIdsFavSongs(idsFavSongs.concat(id)) : setIdsFavSongs([id]);

  const removeSong = (id: number) =>
    idsFavSongs
      ? setIdsFavSongs(idsFavSongs.filter((idsSongs) => idsSongs !== id))
      : null;

  useEffect(() => {
    if (idsFavSongs) {
      localStorage.setItem(key, JSON.stringify(idsFavSongs));
    }
  }, [idsFavSongs]);

  return { addFavSong, removeSong, idsFavSongs };
};
