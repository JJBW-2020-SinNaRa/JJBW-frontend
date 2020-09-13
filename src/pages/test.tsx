import React from "react";
import {
  NextPage, NextPageContext,
} from "next";
import { useQuery, gql, } from "@apollo/client";
import { getApolloClient } from "src/hooks";

const TestPage: NextPage = () => {
  const { data, loading, } = useQuery(gql`
    query {
      _
    }
  `);
  if (loading) {
    return (<div>loading...</div>)
  }
  return <div>{data["_"]}</div>;
};

export default TestPage;
