import React, {ReactElement, useState} from "react";
import {Helmet} from "react-helmet";
import {ReportFormTemplate} from "../views/templates/ReportFormTemplate/ReportFormTemplate";
import {CompleteTemplate} from "../views/templates/CompleteTemplate/CompleteTemplate";

export type ReportPageProps = {};

export const ReportPage = ({}: ReportPageProps): ReactElement => {
  const [state, setState] = useState(0);
  const handleSubmit = (): void => {
    setState(1);
  }
  
  return (
    <div>
      <Helmet>
        <title>쓰레기 발견했어요!</title>
      </Helmet>
      
      <section>
        {state ? <CompleteTemplate content={"폐기물 신고가\n완료되었습니다."} /> : <ReportFormTemplate onComplete={handleSubmit} />}
      </section>
    </div>
  )
}
