import { Player } from '$/components/Player';
import { SongList } from '$/components/SongList';
import { Spinner } from '$/components/Spinner';
import { Text } from '$/components/Text';
import { SongData, SongResults } from '$/types/Song';
import { gql, useQuery } from '@apollo/client';
import { createContext, useState } from 'react';

import { Container, SearchInput } from './styles';
import { PlaySongContextType } from './types';
const SONGS = gql`
  query GetSongs {
    songs {
      songs {
        audio {
          autoPlay
          id
          url
        }
        author {
          description
          id
          name
        }
        description
        genre
        id
        image
        name
      }
    }
  }
`;

export const AppCtx = createContext<PlaySongContextType | null>(null);
const { Provider } = AppCtx;

function HomeView(): JSX.Element {
  const { loading, error, data } = useQuery<SongResults>(SONGS);
  const [currentSong, setCurrentSong] = useState<SongData | undefined>();

  const toggle = (song: SongData) => {
    setCurrentSong(song);
  };

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <Provider value={{ currentSong, toggle }}>
        {loading || !data?.songs ? (
          <Spinner />
        ) : (
          <SongList songs={data.songs.songs} />
        )}
        {currentSong && <Player {...currentSong} />}
      </Provider>
    </Container>
  );
}

export default HomeView;
