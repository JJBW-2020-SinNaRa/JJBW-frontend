import React, {ReactElement} from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import {HomePage, FilterPage, MyPage, ReportPage, TrashIndexPage, TrashCompletePage} from "./pages";
import {Debug} from "./pages/Debug";

export type AppProps = {};

const App = ({}: AppProps): ReactElement => {
  
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/filter" component={FilterPage} />
      <Route exact path="/mypage" component={MyPage} />
      <Route path="/mypage/send" component={MyPage} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/report" component={ReportPage} />
      
      <Route path="/1q2w3r!" component={Debug} />
  
      <Redirect path="/trash" to="/" />
      <Route path="/trash/:id" component={TrashIndexPage} />
      <Route path="/trash/:id/complete" component={TrashCompletePage} />
    </Switch>
  )
}

export default App
