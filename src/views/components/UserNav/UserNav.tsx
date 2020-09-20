import React, {ReactElement} from "react";
import {NavLink} from "../NavLink/NavLink";
import {Card} from "../Card/Design";
import {Container} from "./Design";

export type UserNavProps = {};

export const UserNav = ({}: UserNavProps): ReactElement => {
  return (
    <Card>
      <Container>
        <NavLink exact={true} to="/" text="실시간 폐기물"/>
        <NavLink exact={false} to="/filter" text="필터 "/>
      </Container>
    </Card>
  )
};
