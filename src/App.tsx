import React, {ReactElement, useEffect, useState} from "react";
import {Route, Switch, Redirect} from 'react-router-dom'

import {FilterPage, MyPage, ReportPage, TrashIndexPage, TrashCompletePage} from "./pages";
import {BadgePage} from "./pages/mypage/Badge";
import {BadgeDetailPage} from "./pages/mypage/BadgeDetail";
import {Debug} from "./pages/Debug";
import {HistoryPage} from "./pages/mypage/History";
import {SendKlayPage} from "./pages/mypage/SendKlay";
import {Account} from "./graphql";
import {SplashTemplate} from "./views/templates/Splash";
import {LoginTemplate} from "./views/templates/Login";
import {AdminHomeTemplate, UserHomeTemplate} from "./views/templates/Home";
import {UserHeader} from "./views/components/UserHeader/UserHeader";
import {Helmet} from "react-helmet";

export enum HomePageStatus {
  SPLASH = "SPLASH",
  LOGIN = "LOGIN",
  HOME = "HOME",
}

export enum UserAccounts {
  USER1 = "user1",
  USER2 = "user2",
  ADMIN1 = "admin1"
}

export type AppProps = {};

const App = ({}: AppProps): ReactElement => {
  const [pageStatus, setPageStatus] = useState<HomePageStatus>(HomePageStatus.SPLASH);
  const [userAccount, setUserAccount] = useState<Account | null>(null);
  const [isServiceLoaded, setIsServiceLoaded] = useState(false);
  
  // 앱의 상태에 따라 useEffect 업데이트
  useEffect(() => {
    const [loaded, account, updateStatus] = [isServiceLoaded, userAccount, setPageStatus]
    
    // splash 조건 (로그인 X, 서비스 로딩 X)
    if (!loaded) {
      updateStatus(HomePageStatus.SPLASH);
      
      setTimeout(() => {
        setIsServiceLoaded(true);
        updateStatus(HomePageStatus.LOGIN);
      }, 100);
      
      return;
    }
    
    // login 조건 (로그인 X, 서비스 로딩 O)
    if (!account?.id && loaded) {
      const acc: Account | null = JSON.parse(localStorage.getItem('account') as string);
  
      if (!acc?.name) {
        updateStatus(HomePageStatus.LOGIN);
        return;
      }
      
      setUserAccount(acc)
      setPageStatus(HomePageStatus.HOME)
    }
    
    // home 조건 (로그인 O, 서비스 로딩 O)
    if (account?.id && loaded) {
      updateStatus(HomePageStatus.HOME);
      return;
    }
  }, [userAccount, isServiceLoaded]);
  
  function logOut(): void {
    localStorage.removeItem('account');
    setPageStatus(HomePageStatus.LOGIN);
  }
  
  switch (pageStatus) {
    case HomePageStatus.SPLASH:
      return (
        <SplashTemplate/>
      );
    case HomePageStatus.LOGIN:
      return <LoginTemplate updateUserAcc={setUserAccount}/>
    case HomePageStatus.HOME:
      return (
        <>
          <Switch>
            <Route path="/1q2w3r!" component={Debug}/>
    
            {userAccount?.id?.includes('admin')
              ? (
                <>
                  <Helmet>
                    <title>치워주세요 - 관리자</title>
                  </Helmet>
  
                  <Switch>
                    <Route exact path="/" component={AdminHomeTemplate}/>
    
                    <Route path="*">
                      404
                    </Route>
                  </Switch>
                </>
              )
              : (
                <>
                  <Helmet>
                    <title>치워주세요</title>
                  </Helmet>
                  
                  <UserHeader />
  
                  <Switch>
                    {/*홈*/}
                    <Route exact path="/" component={UserHomeTemplate}/>
                    <Route exact path="/filter" component={UserHomeTemplate}/>
                    
                    {/*홈-2*/}
                    <Redirect exact path="/trash" to="/"/>
                    <Route exact path="/trash/:id" component={TrashIndexPage}/>
                    <Route path="/trash/:id/complete" component={TrashCompletePage}/>
    
                    {/*신고*/}
                    <Route exact path="/report" component={ReportPage}/>
    
                    {/*내 정보*/}
                    <Route exact path="/mypage" component={MyPage}/>
                    {/*내 정보-2*/}
                    <Route exact path="/mypage/send" component={SendKlayPage}/>
                    {/*내 정보-3*/}
                    <Route exact path="/mypage/history" component={HistoryPage}/>
                    {/*내 정보-4*/}
                    <Route exact path="/mypage/badge" component={BadgePage}/>
                    <Route exact path="/mypage/badge/:id" component={BadgeDetailPage}/>
    
                    <Route exact path="/" component={AdminHomeTemplate}/>
    
                    <Route path="*">
                      404
                    </Route>
                  </Switch>
                </>
              )}
          </Switch>
          
          <button onClick={logOut}>로그아웃</button>
        </>
      )
    default :
      return <div>error</div>
  }
}

export default App
