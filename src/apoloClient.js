import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://", 
  cache: new InMemoryCache(),
});

export default client;
