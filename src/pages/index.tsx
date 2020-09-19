import React, {useEffect, useState} from "react";
import {
  NextPage,
//   NextPageContext,
} from "next";
import {SplashTemplate} from "../views/templates/Splash";
import {LoginTemplate} from "../views/templates/Login";
import {AdminHomeTemplate, UserHomeTemplate} from "../views/templates/Home";
// import {
//   gql,
// } from "@apollo/client";
// import {
//   getApolloClient,
// } from "src/hooks";

export enum IndexPageStatus {
 SPLASH = "SPLASH",
 LOGIN = "LOGIN",
 HOME = "HOME",
}

export enum UserAccountList {
  USER1 = "user1",
  USER2 = "user2",
  ADMIN1 = "admin1"
}

export type UserAccount = UserAccountList | null;

export type IndexPageProps = {}

const IndexPage: NextPage = ({} : IndexPageProps) => {
  // return (<div>{props["_"]}</div>);
  const [pageStatus, setPageStatus] = useState<IndexPageStatus>(IndexPageStatus.SPLASH);
  const [userAccount, setUserAccount] = useState<UserAccount>(null);
  const [isServiceLoaded, setIsServiceLoaded] = useState(false);
  
  // 앱의 상태에 따라 useEffect 업데이트
  useEffect(() => {
    const [loaded, account, updateStatus] = [isServiceLoaded, userAccount, setPageStatus]
    
    // splash 조건 (로그인 X, 서비스 로딩 X)
    if (!loaded) {
      updateStatus(IndexPageStatus.SPLASH);
      
      setTimeout(() => {
        setIsServiceLoaded(true);
        updateStatus(IndexPageStatus.LOGIN);
      }, 100);
      
      return;
    }
    
    // login 조건 (로그인 X, 서비스 로딩 O)
    if (!account && loaded) {
      updateStatus(IndexPageStatus.LOGIN);
      return;
    }
    
    // home 조건 (로그인 O, 서비스 로딩 O)
    if (account && loaded) {
      updateStatus(IndexPageStatus.HOME);
      return;
    }
    
    throw new Error('updatePageStatus function Error');
  }, [userAccount, isServiceLoaded]);
  
  switch (pageStatus) {
    case IndexPageStatus.SPLASH:
      return (
        <SplashTemplate />
      );
    case IndexPageStatus.LOGIN:
      return <LoginTemplate updateUserAcc={setUserAccount} />
    case IndexPageStatus.HOME:
      return userAccount.includes('admin')
        ? <AdminHomeTemplate />
        : <UserHomeTemplate />
    default :
      throw new Error(`pageStatus is not correct : ${pageStatus}`);
  }
};

// IndexPage.getInitialProps = async (
//   context: NextPageContext,
// ) => {
//   const client = getApolloClient();
//   const { data } = await client.query({
//     query: gql`
//     query {
//       _
//     }
//     `
//   });
//   return {
//     ...data,
//   };
// };

export default IndexPage;
