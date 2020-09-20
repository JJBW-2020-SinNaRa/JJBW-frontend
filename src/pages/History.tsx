import React, { FC } from "react";

export const HistoryPage: FC = () => {
  return (
    <div>
      <h3>보유 KLAY</h3>
      <div>
        <img />
        <span>0</span>
      </div>
      <h3>거래 내역</h3>
      <ul>
        <li>
          <div>{new Date().toDateString()}</div>
          <div>
            <span>받기 완료</span>
            <span>거래 아이디</span>
          </div>
          <div>
            <img/>
            <span>+60KLAY</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
