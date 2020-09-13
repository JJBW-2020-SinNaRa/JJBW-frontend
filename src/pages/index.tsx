import React from "react";
import {
  NextPage,
  NextPageContext,
} from "next";
import {
  gql,
} from "@apollo/client";
import {
  getApolloClient,
} from "src/hooks";

const IndexPage: NextPage = (props) => {
  return (<div>{props["_"]}</div>);
};

IndexPage.getInitialProps = async (
  context: NextPageContext,
) => {
  const client = getApolloClient();
  const { data } = await client.query({
    query: gql`
    query {
      _
    }
    `
  });
  return {
    ...data,
  };
};

export default IndexPage;
