import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://api-frontend-challenge.herokuapp.com/graphql';

const apolloClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default apolloClient;
