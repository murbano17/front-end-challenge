import { Song } from '$/components/Song';
import { Text } from '$/components/Text';

import { Container, List } from './styles';
import { SongListProps } from './types';

export const SongList = ({ songs }: SongListProps) => (
  <Container>
    <Text tag="h2" variant="title2">
      Featured songs
    </Text>
    <List>
      {songs.map((song) => (
        <Song key={song.id} {...{ song }} />
      ))}
    </List>
  </Container>
);
