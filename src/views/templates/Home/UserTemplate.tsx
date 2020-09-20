import React, {ReactElement} from "react";
import {UserNav} from "../../components/UserNav/UserNav";

export type UserHomeProps = {};

export const UserHomeTemplate = ({}: UserHomeProps): ReactElement => {
  return (
    <main>
      <UserNav />
    
    </main>
  )
};
