import {Helmet} from "react-helmet";
import React, {ReactElement} from "react";
import {UserAccounts} from "../../App";
import {useMutation} from "@apollo/client";
import {LOGIN_QUERY} from "../../graphql";
import {Account} from "../../graphql";

export type LoginProps = {
  updateUserAcc? : (account: Account) => void;
}

export const LoginTemplate = ({updateUserAcc}: LoginProps): ReactElement => {
  const [login] = useMutation(LOGIN_QUERY)
  
  const handleLogin = async (id: UserAccounts) => {
    try {
      const {data} = await login({
        variables: {
          id
        }
      })
      
      localStorage.setItem(
        "token",
        data.getAccessTokenByID.token
      )
      localStorage.setItem(
        "account",
        JSON.stringify(data.getAccessTokenByID.account)
      )
  
      if (updateUserAcc) {
        updateUserAcc(data.getAccessTokenByID.account)
      }
    } catch (err) {
      console.error(err.toString())
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
              <button onClick={() => handleLogin(account)}>{account}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}
