import { Text } from '$/components/Text';
import { Song } from '$/types/Song';
import { gql, useQuery } from '@apollo/client';

import { Container, SearchInput } from './styles';

const SongsQuery = gql`
  query {
    songs {
      songs {
        id
        name
        author {
          id
          name
          description
        }
        description
        audio {
          id
          url
          autoPlay
        }
        genre
        image
      }
    }
  }
`;

function HomeView(): JSX.Element {
  const { data, error, loading } = useQuery(SongsQuery);
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
    </Container>
  );
}

export default HomeView;
