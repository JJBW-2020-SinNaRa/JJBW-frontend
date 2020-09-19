import React, {ReactElement, useState} from "react";
import Head from "next/head";

export type MyPageProps = {};

export type MyPageRouteProps = {
  status: MyPageStatus
};

export enum MyPageStatus {
  COMPLETE = "COMPLETE",
  REPORT = "REPORT"
}

const MyPageRoute = ({status} : MyPageRouteProps): ReactElement => {
  switch (status) {
    case MyPageStatus.REPORT:
      return (
        <div>
          REPORT
        </div>
      )
    case MyPageStatus.COMPLETE:
      return (
        <div>
          COMPLETE
        </div>
      )
    default:
      return null
  }
}

const MyPage = ({} : MyPageProps) : ReactElement => {
  const [pageStatus, setPageStatus] = useState<MyPageStatus>(MyPageStatus.REPORT)
  
  return (
    <div>
      <Head>
        <title>내 정보</title>
      </Head>
      
      <section>
        <h1>유저 1</h1>
        
        <h3>0 KLAY</h3>
        
        <h3>최근 받은 배지</h3>
        <ul>
          <li>이거</li>
          <li>저거</li>
          <li>이거</li>
        </ul>
      </section>
      
      <nav>
        <button onClick={() => setPageStatus(MyPageStatus.REPORT)}>신고 내역</button>
        <button onClick={() => setPageStatus(MyPageStatus.COMPLETE)}>처리 내역</button>
      </nav>
      
      <section>
        <MyPageRoute status={pageStatus} />
      </section>
    </div>
  )
};

export default MyPage
