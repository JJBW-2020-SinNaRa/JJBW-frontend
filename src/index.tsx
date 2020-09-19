import React from "react";
import App from "./App"
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/react-hooks";
import {BrowserRouter} from "react-router-dom";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graph",
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'));
