import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";
import {Card} from "../../components/Card/Design";
import {Textarea, Input, SubmitBtn, Field, Text} from "../../components/FrmElement/Design";
import {Container} from "./Design";

export type ReportFormTemplateProps = {};

export const ReportFormTemplate = ({}: ReportFormTemplateProps): ReactElement => {
  // TODO : 백엔드 연동
  
  return (
    <div>
      <Helmet>
        <title>쓰레기 발견했어요!</title>
      </Helmet>
      
      <Container>
        <Card>
          <Text>
            발견하신 무단 폐기물의 정보를 기입해주세요!
            <br/>
            소정의 보상금과 배지를 받을 수 있습니다.
          </Text>
        </Card>
        
        <Field>
          <h3>폐기물 설명</h3>
          <Card>
            <Textarea />
          </Card>
        </Field>
        
        <Field>
          <h3>폐기물 위치</h3>
          <Card>
            <Input type="text" placeholder={"도로명주소"} />
          </Card>
          
          <Card>
            <Input type="text" placeholder={"세부주소"} />
          </Card>
        </Field>
        
        <Field>
          <h3>폐기물 종류</h3>
          <Card>
            <Input type="text" placeholder={"폐기물 종류 기입"}/>
          </Card>
        </Field>
        
        <Field>
          <h3>발견 시기</h3>
          <Card>
            <Input type="text" placeholder={"언제 발견했는지 기입"} />
          </Card>
        </Field>
        
        <Field>
          <h3>사진 업로드</h3>
          <Card>
            <Input type="file" />
          </Card>
        </Field>
        
        <SubmitBtn>
          신고하기
        </SubmitBtn>
      </Container>
    </div>
  )
}
