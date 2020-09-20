import React, {ReactElement} from "react";
import {NavLink as NL} from "react-router-dom";
import {LinkWithText} from "./Design";

export type NavLinkProps = {
  exact: boolean;
  to: string;
  text: string;
};

export const NavLink = ({exact = false, to, text}: NavLinkProps): ReactElement => {
  return (
    <LinkWithText>
      <NL
        exact={exact}
        to={to}
        activeClassName={"active"}
      >
        {text}
      </NL>
    </LinkWithText>
  )
};
