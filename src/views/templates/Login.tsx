import {Helmet} from "react-helmet";
import React, {ReactElement} from "react";
import {UserAccounts} from "../../pages/";

export type LoginProps = {
  updateUserAcc? : (id: UserAccounts) => void;
}

export const LoginTemplate = ({updateUserAcc}: LoginProps): ReactElement => {
  const login = async (id: UserAccounts) => {
    
  
    if (updateUserAcc) {
      updateUserAcc(id)
    }
  }
  
  return (
    <div>
      <Helmet>
        <title>치우기전에, 로그인하세요</title>
      </Helmet>
      <ul>
        {[UserAccounts.USER1, UserAccounts.USER2, UserAccounts.ADMIN1]
          .map((account) => (
            <li key={account}>
              <button onClick={() => login(account)}>{account}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}
