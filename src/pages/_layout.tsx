import React, {
  FC,
  Fragment,
} from "react";
import Head from "next/head";
import {
  NextComponentType,
  NextPageContext,
} from "next";

interface LayoutProps {
  pageProps: any;
  Component: NextComponentType<NextPageContext, any, {}>;
}

const Layout: FC<LayoutProps> = ({
  Component,
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
      <Component {...pageProps} />
    </Fragment>
  );
};

export default Layout;
