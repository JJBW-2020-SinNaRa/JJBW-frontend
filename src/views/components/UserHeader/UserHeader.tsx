import React, {ReactElement} from "react";
import {Header, HeaderLink} from "./Design";
import {NavLink} from "react-router-dom";

export function UserHeader(): ReactElement {
  
  return (
    <Header>
      <HeaderLink>
        <NavLink exact to="/"
                 activeClassName="active"
        >홈</NavLink>
      </HeaderLink>
      
      <HeaderLink>
        <NavLink exact to="/report"
                 activeClassName="active"
        >신고</NavLink>
      </HeaderLink>
      
      <HeaderLink>
        <NavLink exact to="/mypage"
                 activeClassName="active"
        >내 정보</NavLink>
      </HeaderLink>
    </Header>
  )
}
