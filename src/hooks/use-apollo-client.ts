import {
  useMemo,
} from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graph`,
      credentials: "include",
      fetchOptions: {
        mode: "no-cors"
      }
    }),
    cache: new InMemoryCache()
  });
};

export const getApolloClient = (initialState?: any) => {
  const _client = client = createApolloClient();
  if (initialState) {
    const existingCache = _client.extract();
    _client.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") {
    return _client;
  }
  if (!client) {
    return _client;
  }
  return _client;
}

export const useApollo = (initialState?: any) => {
  const store = useMemo(() => getApolloClient(initialState), [initialState]);
  return store;
};
