import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const SendKlayPage: FC = () => {
  return (
    <div>
      <KlaySend />
    </div>
  );
};

export const KlaySend: FC = () => {
  return (
    <div>
      <div>
        <h3>전송가능한 KLAY</h3>
        <div>
          <img />
          <span>0</span>
        </div>
      </div>
      <div>
        <label htmlFor="sendklay">전송할 KLAY</label>
        <div>
          <img />
          <input id="sendklay" />
        </div>
      </div>
      <button>다음</button>
    </div>
  );
};

export const KlayAddress: FC = () => {
  return (
    <div>
      <div>
        <p>전송할 주소나 QR코드 중에 하나를 입력해주세요.</p>
        <p>지갑 주소 오기입 전송 사고는 <span>치워주세요</span>가 책입지지 않습니다.</p>
      </div>
      <div>
        <label>전송할 주소</label>
        <input placeholder="주소를 입력해 주세요" />
      </div>
      <div>
        <label>QR 코드 촬열/업로드</label>
        <img />
        <input />
      </div>
      <button>다음</button>
    </div>
  );
};

export const KlayCheck: FC = () => {
  return (
    <div>
      <div>
        <p>아래의 주소로 해당 수량의 KLAY를 보내시겠습니까?</p>
      </div>
      <h3>전송할 KLAY</h3>
      <div>
        <img />
        <span>0</span>
      </div>
      <h3>전송할 주소</h3>
      <div>
        <span>주소주소 주소</span>
      </div>
      <button>전송</button>
    </div>
  )
};

export const KlayComplete: FC = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/mypage");
    }, 3000);
  }, []);
  return (
    <div>
      <p><span>전송</span>이 완료되었습니다!</p>
    </div>
  )
}