import React, {ReactElement, useState} from "react";
import {Helmet} from "react-helmet";
import {Card} from "../../views/components/Card/Design";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ButtonGrid} from "../../views/templates/Filters/Design";
import {Button} from "../../views/components/FrmElement/Design";
import {TrashList} from "../../views/templates/Trashs/Trashs";

export type MyPageProps = {};

export type MyPageRouteProps = {
  status: MyPageStatus;
};

const CardCon = styled.div`
  padding: 24px;
  display: grid;
  grid-row-gap: 12px;
`

const CardConCon = styled.div`
  display: flex;
  justify-content: space-between;
`

const BadgeCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 45px;
  place-content: center center;
  
  div {
    display: flex;
    justify-content: center;
  }
`

export enum MyPageStatus {
  COMPLETE = "COMPLETE",
  REPORT = "REPORT"
}

const MyPageRoute = ({status}: MyPageRouteProps): ReactElement => {
  switch (status) {
    case MyPageStatus.REPORT:
      return (
        <TrashList />
      )
    case MyPageStatus.COMPLETE:
      return (
        <TrashList />
      )
    default:
      return <div>error</div>
  }
}

const Nav = styled.nav`
  padding: 36px 0;
`

export const MyPage = ({}: MyPageProps): ReactElement => {
  const [pageStatus, setPageStatus] = useState<MyPageStatus>(MyPageStatus.REPORT)
  
  return (
    <div>
      <Helmet>
        <title>내 정보</title>
      </Helmet>
      
      <Card>
        <CardCon>
          <h1>유저 1</h1>
  
          <CardConCon>
            <h3>0 KLAY</h3>
  
            <Link to="mypage/send">송금</Link>
          </CardConCon>
  
          <CardConCon>
            <h3>최근 받은 배지</h3>
            
            <Link to="mypage/badge">전체 보기</Link>
          </CardConCon>
  
          <BadgeCon>
            <div>이거</div>
            <div>저거</div>
            <div>이거</div>
            <div>요거</div>
          </BadgeCon>
        </CardCon>
      </Card>
      
      <Nav>
        <ButtonGrid content={2}>
          <Card>
            <Button onClick={() => setPageStatus(MyPageStatus.REPORT)} current={pageStatus === MyPageStatus.REPORT}>신고 내역</Button>
          </Card>
          <Card>
            <Button onClick={() => setPageStatus(MyPageStatus.COMPLETE)} current={pageStatus === MyPageStatus.COMPLETE}>처리 내역</Button>
          </Card>
        </ButtonGrid>
      </Nav>
      
      <section>
        <MyPageRoute status={pageStatus} />
      </section>
    </div>
  )
};
