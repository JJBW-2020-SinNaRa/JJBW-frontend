import React, { FC } from "react";

export const BadgeDetailPage: FC = () => {
  return (
    <div>
      <div>
        <img alt="배지" />
      </div>
      <ul>
        <li>
          <h3>이름</h3>
          <p>신고왕</p>
        </li>
        <li>
          <h3>획득방법</h3>
          <p>누적 폐기물 신고를 3번 달성해요.</p>
        </li>
        <li>
          <h3>받은 시각</h3>
          <p>{new Date().toDateString()}</p>
        </li>
      </ul>
    </div>
  );
};
