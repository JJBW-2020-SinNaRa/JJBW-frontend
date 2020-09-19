import React, {ReactElement} from "react";
import Head from "next/head";

export type TrashCompleteProps = {
  id: number
}

const TrashCompletePage = ({id} : TrashCompleteProps) : ReactElement => {
  // todo : 백엔드 연동
  
  const handleReport = () => {
    console.debug(`${id} 번 폐기물 처리 완료`);
  }
  
  return (
    <div>
      <Head>
        <title>처리 완료</title>
      </Head>
      
      <section>
        <div>
          <h3>발견 당시 사진</h3>
          <div>
            업로드
          </div>
        </div>
        <div>
          <h3>처리 이후 사진</h3>
          <div>
            업로드
          </div>
        </div>
        <div>
          <h3>처리한 폐기물 사진</h3>
          <div>
            업로드
          </div>
        </div>
        
        <button onClick={handleReport}>
          처리 완료
        </button>
      </section>
    </div>
  )
}

TrashCompletePage.getInitialProps = async ({query}) => {
  return {
    id: query.id
  }
}

export default TrashCompletePage
