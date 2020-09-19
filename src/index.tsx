import React from "react";
import App from "./App"
import ReactDOM from 'react-dom';
import {GlobalStyle} from "./views/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/react-hooks";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "/graph",
  })
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GlobalStyle />
      <App/>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
