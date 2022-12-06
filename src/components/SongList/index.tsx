import { Song } from '$/components/Song';
import { Text } from '$/components/Text';
import { AppCtx } from '$/containers/Views/Home/index';
import { useContext } from 'react';

import { List } from './styles';
import { SongListProps } from './types';

export const SongList = ({ songs }: SongListProps) => {
  const { toggle } = useContext(AppCtx);
  return (
    <>
      <Text tag="h2" variant="title2">
        Featured songs
      </Text>
      <List>
        {songs.map((song) => (
          <Song key={song.id} {...{ song, toggle }} />
        ))}
      </List>
    </>
  );
};
