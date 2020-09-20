import React, {ReactElement} from "react";
import {Text} from "./Design";

export type CompleteTemplateProps = {
  content: string;
};

export const CompleteTemplate = ({content}: CompleteTemplateProps): ReactElement => {
  return (
    <Text>
      {content}
    </Text>
  )
}
