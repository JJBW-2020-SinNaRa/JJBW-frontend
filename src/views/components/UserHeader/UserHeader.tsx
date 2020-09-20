import React, {ReactElement} from "react";
import {Header} from "./Design";
import {NavLink} from "../NavLink/NavLink";

export function UserHeader(): ReactElement {
  
  return (
    <Header>
      <NavLink exact to="/" text="홈" />
  
      <NavLink exact={false} to="/report" text="신고" />
  
      <NavLink exact={false} to="/mypage" text="내 정보" />
    </Header>
  )
}
