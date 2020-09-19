import React, {ReactElement} from "react";
import Head from "next/head";

export type UserHomeProps = {};

export const UserHomeTemplate = ({} : UserHomeProps) : ReactElement => {
  return (
    <div>
      <Head>
        <title>치워주세요</title>
      </Head>
      
      USER HOME
    </div>
  )
};
