import React, {ReactElement, useCallback, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import {useHistory} from "react-router-dom";
import {Card} from "../../components/Card/Design";
import {Container, Content, ButtonGrid} from "./Design";
import { Button, Input, SubmitBtn } from "../../components/FrmElement/Design"

export type FilterTemplateProps = {}

export const FilterTemplate = ({}: FilterTemplateProps): ReactElement => {
  const [hasReward, setReward] = useState<boolean | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const applyFileter = useCallback(() => {
    const search = searchRef.current?.value;
    const location = locationRef.current?.value;
    // const query =
    // history.push()
  }, []);
  return (
    <Container>
      <Helmet>
        <title>폐기물 필터</title>
      </Helmet>
      
      <Content>
        <h3>보상금 유무</h3>
        <ButtonGrid>
          <Card>
            <Button type="button" onClick={() => setReward(null)} current={hasReward === null}>전체</Button>
          </Card>
          <Card>
            <Button type="button" onClick={() => setReward(true)} current={hasReward === true}>있음</Button>
          </Card>
          <Card>
            <Button type="button" onClick={() => setReward(false)} current={hasReward === false}>없음</Button>
          </Card>
        </ButtonGrid>
      </Content>
      
      <Content>
        <h3>폐기물 위치</h3>
        <Card>
          <Input type="text" ref={locationRef} placeholder="폐기물의 위치를 읍 면 리의 형태로 입력하세요."/>
        </Card>
      </Content>
  
      <Content>
        <SubmitBtn>적용</SubmitBtn>
      </Content>
    </Container>
  )
}
