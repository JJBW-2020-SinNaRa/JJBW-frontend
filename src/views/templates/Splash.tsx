import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

export type SplashProps = {};

export const SplashTemplate = ({} : SplashProps) : ReactElement => {
  return (
    <div>
      <Helmet>
        <title>치워주세요는 준비중입니다</title>
      </Helmet>
      
      <h3>
        우리 동네 무단 폐기물
      </h3>
      <h1>
        치워주세요
      </h1>
    </div>
  )
}
