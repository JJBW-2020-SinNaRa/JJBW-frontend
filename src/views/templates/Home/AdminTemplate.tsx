import React, {ReactElement} from "react";
import Head from "next/head";

export type AdminHomeProps = { };

export const AdminHomeTemplate = ({} : AdminHomeProps) : ReactElement => {
  return (
    <div>
      <Head>
        <title>치워주세요 - 관리자</title>
      </Head>
      
      ADMIN HOME
    </div>
  )
};
