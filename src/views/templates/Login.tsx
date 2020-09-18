import Head from "next/head";
import React, {ReactElement} from "react";
import {UserAccount} from "../../pages";

export type LoginProps = {
  updateUserAcc: (account : UserAccount) => void
}

export const LoginTemplate = ({updateUserAcc} : LoginProps) : ReactElement => {
  return (
    <div>
      <Head>
        <title>치우기전에, 로그인하세요</title>
      </Head>
      <ul>
        {['user1', 'user2', 'admin1'].map((account : UserAccount) => (
          <li key={account}>
            <button onClick={() => updateUserAcc(account)}>{account}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
