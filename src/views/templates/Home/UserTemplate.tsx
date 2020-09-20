import React, {ReactElement} from "react";
import {UserNav} from "../../components/UserNav/UserNav";
import {Route, Switch} from "react-router-dom";
import {FilterTemplate} from "../Filters/FilterTemplate";
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
        <Route path="/filter" component={FilterTemplate}/>
      </Switch>
    </main>
  )
};
