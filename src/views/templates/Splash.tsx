import Head from "next/head";
import React, {ReactElement} from "react";

export type SplashProps = {};

export const SplashTemplate = ({} : SplashProps) : ReactElement => {
  return (
    <div>
      <Head>
        <title>치워주세요는 준비중입니다</title>
      </Head>
      
      <h3>
        우리 동네 무단 폐기물
      </h3>
      <h1>
        치워주세요
      </h1>
    </div>
  )
}
