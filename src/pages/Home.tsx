import React, {ReactElement, useEffect, useState} from "react";
import {SplashTemplate} from "../views/templates/Splash";
import {LoginTemplate} from "../views/templates/Login";
import {AdminHomeTemplate, UserHomeTemplate} from "src/views/templates/Home";

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

export type HomePageProps = {};

export const HomePage = ({}: HomePageProps): ReactElement => {
  const [pageStatus, setPageStatus] = useState<HomePageStatus>(HomePageStatus.SPLASH);
  const [userAccount, setUserAccount] = useState<UserAccounts | null>(null);
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
    if (!account && loaded) {
      updateStatus(HomePageStatus.LOGIN);
      return;
    }
    
    // home 조건 (로그인 O, 서비스 로딩 O)
    if (account && loaded) {
      updateStatus(HomePageStatus.HOME);
      return;
    }
  }, [userAccount, isServiceLoaded]);
  
  switch (pageStatus) {
    case HomePageStatus.SPLASH:
      return (
        <SplashTemplate />
      );
    case HomePageStatus.LOGIN:
      return <LoginTemplate updateUserAcc={setUserAccount} />
    case HomePageStatus.HOME:
      return userAccount?.includes('admin')
        ? <AdminHomeTemplate />
        : <UserHomeTemplate />
    default :
      return <div>error</div>
  }
};
