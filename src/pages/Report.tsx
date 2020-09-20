import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";
import {ReportFormTemplate} from "../views/templates/ReportFormTemplate/ReportFormTemplate";

export type ReportPageProps = {};

export const ReportPage = ({}: ReportPageProps): ReactElement => {
  // TODO : 백엔드 연동
  
  return (
    <div>
      <Helmet>
        <title>쓰레기 발견했어요!</title>
      </Helmet>
      
      <section>
        <ReportFormTemplate />
      </section>
    </div>
  )
}
