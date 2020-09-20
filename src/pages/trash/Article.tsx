import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';
import {Card} from "../../views/components/Card/Design";
import {Field, SubmitBtn} from "../../views/components/FrmElement/Design";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-row-gap: 36px;
  
  h3 {
    margin-left: 24px;
  }
`

const Content = styled.div`
  padding: 24px;
  
  img {
    display: block;
    margin: 0 auto;
    width: 30%;
  }
`

const Links = styled.div`
  a {
    text-decoration: none;
  }
`

export type TrashIndexProps = {
  id: number;
}

export const TrashIndexPage = ({id}: TrashIndexProps): ReactElement => {
  // TODO : 백엔드 연동
  
  return (
    <div>
      <Helmet>
        <title>제목</title>
      </Helmet>
      
      <Container>
        <Field>
          <h3>보상금</h3>
          <Card>
            <Content>
              50 KLAY
            </Content>
          </Card>
        </Field>
        <Field>
          <h3>폐기물 설명</h3>
          <Card>
            <Content>
              Lorem ipsum dolor sit amet.
            </Content>
          </Card>
        </Field>
        <Field>
          <h3>폐기물 위치</h3>
          <Card>
            <Content>
              Lorem ipsum dolor sit amet.
            </Content>
          </Card>
        </Field>
        <Field>
          <h3>폐기물 종류</h3>
          <Card>
            <Content>
              Lorem ipsum dolor sit amet
            </Content>
          </Card>
        </Field>
        <Field>
          <h3>발견 시기</h3>
          <Card>
            <Content>
              YYYY년 MM월 DD일 HH시 MM분
            </Content>
          </Card>
        </Field>
        <Field>
          <h3>업로드 된 사진</h3>
          <Card>
            <Content>
              <img src="https://placehold.it/300x300" alt=""/>
            </Content>
          </Card>
        </Field>
  
        <Links>
          <Link to={`${id}/complete`}>
            <SubmitBtn>
              처리하기
            </SubmitBtn>
          </Link>
        </Links>
      </Container>
    </div>
)
}
