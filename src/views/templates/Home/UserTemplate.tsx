import React, {ReactElement} from "react";
import {UserNav} from "../../components/UserNav/UserNav";
import {Route, Switch} from "react-router-dom";
import {FilterPage} from "../../../pages";

export type UserHomeProps = {};

export const UserHomeTemplate = ({}: UserHomeProps): ReactElement => {
  return (
    <main>
      <UserNav />
      
      <Switch>
        <Route exact path="/">
          main
        </Route>
        {/*홈-1*/}
        <Route path="/filter" component={FilterPage}/>
      </Switch>
    </main>
  )
};
