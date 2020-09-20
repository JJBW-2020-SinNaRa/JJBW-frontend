import React, {ReactElement} from "react";
import {UserNav} from "../../components/UserNav/UserNav";
import {Route, Switch} from "react-router-dom";
import {FilterPage} from "../../../pages";
import {TrashList} from "../Trashs/Trashs";

export type UserHomeProps = {};

export const UserHomeTemplate = ({}: UserHomeProps): ReactElement => {
  return (
    <main>
      <UserNav />
      
      <Switch>
        {/*홈*/}
        <Route exact path="/" component={TrashList} />
        {/*홈-1*/}
        <Route path="/filter" component={FilterPage}/>
      </Switch>
    </main>
  )
};
