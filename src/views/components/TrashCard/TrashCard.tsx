import React, {ReactElement} from "react";
import {TrashCardContainer, ImageContainer, TextContainer} from "./Design";
import {getBigAddress} from "../../../lib/address";

export enum Status {
  READY = "READY",
  PROGRESS = "PROGRESS",
  FINISHED = "FINISHED"
}

export type TrashCardProps = {
  status: Status;
  imageSrc: string;
  location: string;
  trashKind: string;
  klay: number;
  recommend: number;
};

export const TrashCard = ({status, imageSrc, location, trashKind, klay, recommend}: TrashCardProps): ReactElement => {
  const statusToText = (status: Status) => {
    switch (status) {
      case Status.FINISHED:
        return "종료";
      case Status.PROGRESS:
        return "진행중";
      case Status.READY:
        return "준비중";
    }
  }
  
  return (
    <TrashCardContainer>
      <ImageContainer>
        <img src={imageSrc} alt="폐기물 이미지"/>
      </ImageContainer>
      
      <TextContainer>
        <h2><img src="/assets/icons/location1x.svg"/> {getBigAddress(location)}</h2>
        <h2><img src="/assets/icons/trash1x.svg"/> {trashKind}</h2>
        <h2><img src="/assets/icons/klay1x.svg"/> {status === Status.READY ? "준비중" : klay}</h2>
        
        <span>
          <img src="/assets/icons/thumbs-up1x.svg"/> {recommend}
        </span>
      </TextContainer>
    </TrashCardContainer>
  )
}
