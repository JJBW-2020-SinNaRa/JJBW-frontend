import React, { ReactElement } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import { HomePage, FilterPage, MyPage, ReportPage, TrashIndexPage, TrashCompletePage } from "./pages";
import { BadgePage } from "./pages/Badge";
import { BadgeDetailPage } from "./pages/BadgeDetail";
import { Debug } from "./pages/Debug";
import { HistoryPage } from "./pages/History";
import { SendKlayPage } from "./pages/SendKlay";

export type AppProps = {};

const App = ({ }: AppProps): ReactElement => {

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/filter" component={FilterPage} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/mypage/send" component={SendKlayPage} />
      <Route exact path="/mypage/history" component={HistoryPage} />
      <Route exact path="/mypage/badge" component={BadgePage} />
      <Route exact path="/mypage/badge/:id" component={BadgeDetailPage} />
      <Route exact path="/mypage/report" component={ReportPage} />

      <Route path="/1q2w3r!" component={Debug} />

      <Redirect exact path="/trash" to="/" />
      <Route path="/trash/:id" component={TrashIndexPage} />
      <Route path="/trash/:id/complete" component={TrashCompletePage} />
    </Switch>
  )
}

export default App
