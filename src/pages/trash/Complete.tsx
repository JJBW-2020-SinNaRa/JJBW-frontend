import React, {ReactElement, useState} from "react";
import {Helmet} from "react-helmet";
import {Field, Input, SubmitBtn} from '../../views/components/FrmElement/Design'
import {Card} from "../../views/components/Card/Design";
import styled from "styled-components";
import {CompleteTemplate} from "../../views/templates/CompleteTemplate/CompleteTemplate";

export type TrashCompleteProps = {
  match: any;
}

const Container = styled.section`
  display: grid;
  grid-row-gap: 36px;
`

export const TrashCompletePage = ({match}: TrashCompleteProps): ReactElement => {
  const [isComplete, setIsComplete] = useState(false);
  // todo : 백엔드 연동
  
  const handleReport = () => {
    console.debug(`${match.params.id} 번 폐기물 처리 완료`);
    setIsComplete(true);
  }
  
  return isComplete ? <CompleteTemplate content={"관계 도청에서 심사 후 보상이 주어집니다. \n 빠른 시일 내에 연락드리겠습니다."} /> : (
    <div>
      <Helmet>
        <title>처리 완료</title>
      </Helmet>
      
      <Container>
        <Field>
          <h3>발견 당시 사진</h3>
          <Card>
            <Input type="file" name="before" />
          </Card>
        </Field>
        <Field>
          <h3>처리 이후 사진</h3>
          <Card>
            <Input type="file" name="after" />
          </Card>
        </Field>
        <Field>
          <h3>처리한 폐기물 사진</h3>
          <Card>
            <Input type="file" name="trash" />
          </Card>
        </Field>
        
        <SubmitBtn onClick={handleReport}>
          처리 완료
        </SubmitBtn>
      </Container>
    </div>
  )
}
