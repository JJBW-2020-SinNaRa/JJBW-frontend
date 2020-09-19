import React, {ReactElement} from "react";
import {Helmet} from "react-helmet";

export type ReportPageProps = {};

export const ReportPage = ({} : ReportPageProps) : ReactElement => {
  // TODO : 백엔드 연동
  
  return (
    <div>
      <Helmet>
        <title>쓰레기 발견했어요!</title>
      </Helmet>
      
      <section>
        <p>
          발견하신 무단 폐기물의 정보를 기입해주세요!
          <br/>
          소정의 보상금과 배지를 받을 수 있습니다.
        </p>
  
        <div>
          <h3>폐기물 설명</h3>
          <div>
            <textarea />
          </div>
        </div>
        <div>
          <h3>폐기물 위치</h3>
          <div>
            <input type="text" placeholder={"도로명주소"} />
            <input type="text" placeholder={"세부주소"} />
          </div>
        </div>
        <div>
          <h3>폐기물 종류</h3>
          <div>
            <input type="text"/>
          </div>
        </div>
        <div>
          <h3>발견 시기</h3>
          <div>
            <input type="text" placeholder={"언제 발견했는지 기입"} />
          </div>
        </div>
        <div>
          <h3>사진 업로드</h3>
          <div>
            업로드하기
          </div>
        </div>
        
        <button>
          신고하기
        </button>
      </section>
    </div>
  )
}
