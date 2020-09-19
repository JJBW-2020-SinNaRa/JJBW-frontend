import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

export type FilterProps = {}

export const FilterPage = ({} : FilterProps) : ReactElement => {
  return (
    <div>
      <Helmet>
        <title>폐기물 필터하기</title>
      </Helmet>
      
      <section>
        <h3>보상금 유무</h3>
        <ul>
          <li>
            <button>전체</button>
          </li>
          <li>
            <button>있음</button>
          </li>
          <li>
            <button>없음</button>
          </li>
        </ul>
        
        <h3>폐기물 종류</h3>
        <input type="text" placeholder="검색할 폐기물을 입력하세요." />
        
        <h3>폐기물 위치</h3>
        <input type="text" placeholder="폐기물의 위치를 읍 면 리의 형태로 입력하세요." />
      </section>
    </div>
  )
}
