import React, {ReactElement} from "react";
import {Container} from "./Design";
import {TrashCard, Status} from "../../components/TrashCard/TrashCard";

export type TrashListProps = {};

export const TrashList = ({}: TrashListProps): ReactElement => {
  return (
    <Container>
      <TrashCard imageSrc={"https://placehold.it/300"}klay={35} location={"제주시 애월읍"} recommend={300} status={Status.PROGRESS} trashKind={"냉장고"} />
    </Container>
  )
};
