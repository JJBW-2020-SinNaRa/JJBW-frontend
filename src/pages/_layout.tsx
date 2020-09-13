import React, {
  FC,
  Fragment,
} from "react";
import Head from "next/head";
import {
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";
import {
  NextComponentType,
  NextPageContext,
} from "next";

interface LayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  client: ApolloClient<any>;
  pageProps: any;
}

const Layout: FC<LayoutProps> = ({
  Component,
  client,
  pageProps,
}) => {
  return (
    <Fragment>
      <Head>
        <meta charSet={"utf-8"} />
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
        <meta name={"theme-color"} content={"#000000"} />
        <meta name={"description"} content={"JJBW"} />
        <link rel={"icon"} href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} />
        <link rel={"apple-touch-icon"} href={`${process.env.NEXT_PUBLIC_URL}/logo-192.png`} />
        <title>JJBW</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Fragment>
  );
};

export default Layout;
