import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

export type AdminHomeProps = { };

export const AdminHomeTemplate = ({} : AdminHomeProps) : ReactElement => {
  return (
    <div>
      <Helmet>
        <title>치워주세요 - 관리자</title>
      </Helmet>
      
      ADMIN HOME
    </div>
  )
};
