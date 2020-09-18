import React, {useEffect, useState} from "react";
import {
  NextPage,
//   NextPageContext,
} from "next";
import {LoginTemplate} from "../views/templates/Login";
// import {
//   gql,
// } from "@apollo/client";
// import {
//   getApolloClient,
// } from "src/hooks";

export type IndexPageStatus = "SPLASH" | "LOGIN" | "HOME";

export type UserAccount = "user1" | "user2" | "admin1" | null

const IndexPage: NextPage = (props) => {
  // return (<div>{props["_"]}</div>);
  const [pageStatus, setPageStatus] = useState<IndexPageStatus>('SPLASH');
  const [userAccount, setUserAccount] = useState<UserAccount>(null);
  const [isServiceLoaded, setIsServiceLoaded] = useState(false);
  
  // 앱의 상태에 따라 useEffect 업데이트
  useEffect(() => {
    const [loaded, account, updateStatus] = [isServiceLoaded, userAccount, setPageStatus]
    
    // splash 조건 (로그인 X, 서비스 로딩 X)
    if (!loaded) {
      updateStatus('SPLASH');
      return;
    }
    
    // login 조건 (로그인 X, 서비스 로딩 O)
    if (!account && loaded) {
      updateStatus('LOGIN');
      return;
    }
    
    // home 조건 (로그인 O, 서비스 로딩 O)
    if (account && loaded) {
      updateStatus('HOME');
      return;
    }
    
    throw new Error('updatePageStatus function Error');
  }, [userAccount, isServiceLoaded]);
  
  switch (pageStatus) {
    case "SPLASH":
      return (
        <div>
          splash
          
          <button onClick={() => setIsServiceLoaded(true)}>Login</button>
        </div>
      );
    case "LOGIN":
      return <LoginTemplate updateUserAcc={setUserAccount} />
    case "HOME":
      return (
        <div>
          HOME
        </div>
      );
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
