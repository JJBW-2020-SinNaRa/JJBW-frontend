import React, { FC, useEffect, useState } from "react";

export const BadgePage: FC = () => {
  const [badge, setBadge] = useState<Badge[]>([]);
  useEffect(() => {
    // get badge
  }, []);
  return (
    <div>
      <div>
        <span>활동 배지</span>
      </div>
      <ul>
        <li>
          <img alt="badge" />
        </li>
      </ul>
    </div>
  );
};


export type Badge = {
  image: string;
  name: string;
  obtain: string;
  recievedAt: Date;
}