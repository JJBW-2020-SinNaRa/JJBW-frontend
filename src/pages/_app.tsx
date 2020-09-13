import React from "react";
import {
  NextComponentType,
} from "next";
import {
  AppContext,
  AppInitialProps,
  AppProps,
} from "next/app";
import {
  useApollo,
} from "src/hooks";
import Layout from "./_layout";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <Layout
      Component={Component}
      client={client}
      pageProps={pageProps} />
  );
};

export default App;
