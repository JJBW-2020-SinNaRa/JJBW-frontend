import React, { ReactElement, useCallback, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

export type FilterTemplateProps = {}

export const FilterTemplate = ({ }: FilterTemplateProps): ReactElement => {
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
    <div>
      <Helmet>
        <title>폐기물 필터</title>
      </Helmet>
      
      <section>
        <h3>보상금 유무</h3>
        <ul>
          <li>
            <button type="button" onClick={() => setReward(null)}>전체</button>
          </li>
          <li>
            <button type="button" onClick={() => setReward(true)}>있음</button>
          </li>
          <li>
            <button type="button" onClick={() => setReward(false)}>없음</button>
          </li>
        </ul>
        
        <h3>폐기물 종류</h3>
        <input type="text" ref={searchRef} placeholder="검색할 폐기물을 입력하세요." />
        
        <h3>폐기물 위치</h3>
        <input type="text" ref={locationRef} placeholder="폐기물의 위치를 읍 면 리의 형태로 입력하세요." />
        
        <button>적용</button>
      </section>
    </div >
  )
}
