import React, {
  Fragment,
} from "react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import {
  ServerStyleSheet,
} from "styled-components";

export default class AppDocument extends Document {

  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => {
        return originRenderPage({
          enhanceApp: (App) => (props) => {
            return sheet.collectStyles(<App {...props} />);
          },
        });
      };
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={"ko"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
