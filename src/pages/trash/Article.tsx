import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';

export type TrashIndexProps = {
  id: number
}

export const TrashIndexPage = ({ id }: TrashIndexProps): ReactElement => {
  // TODO : 백엔드 연동
  
  return (
    <div>
      <Helmet>
        <title>제목</title>
      </Helmet>
      
      <section>
        <div>
          <h3>보상금</h3>
          <div>
            50 KLAY
          </div>
        </div>
        <div>
          <h3>폐기물 설명</h3>
          <div>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div>
          <h3>폐기물 위치</h3>
          <div>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div>
          <h3>폐기물 종류</h3>
          <div>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div>
          <h3>발견 시기</h3>
          <div>
            YYYY년 MM월 DD일 HH시 MM분
          </div>
        </div>
        <div>
          <h3>업로드 된 사진</h3>
          <div>
            <img src="https://placehold.it/300x300" alt=""/>
          </div>
        </div>
        
        <Link to={`${id}/complete`}>
          a
        </Link>
      </section>
    </div>
  )
}
