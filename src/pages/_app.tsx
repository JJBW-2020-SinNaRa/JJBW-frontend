import React from "react";
import {
  NextComponentType,
} from "next";
import {
  AppContext,
  AppInitialProps,
  AppProps,
} from "next/app";
import Layout from "./_layout";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout
      Component={Component}
      pageProps={pageProps} />
  );
};

export default App;
