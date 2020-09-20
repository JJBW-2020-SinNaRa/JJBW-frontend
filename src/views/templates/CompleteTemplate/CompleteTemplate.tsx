import React, {ReactElement, useEffect} from "react";
import {Text} from "./Design";
import {useHistory} from "react-router";

export type CompleteTemplateProps = {
  content: string;
};

export const CompleteTemplate = ({content}: CompleteTemplateProps): ReactElement => {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [])
  
  return (
    <Text>
      {content}
    </Text>
  )
}
