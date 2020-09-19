import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

export type UserHomeProps = {};

export const UserHomeTemplate = ({} : UserHomeProps) : ReactElement => {
  return (
    <div>
      <Helmet>
        <title>치워주세요</title>
      </Helmet>
      
      USER HOME
    </div>
  )
};
