import Head from "next/head";
import {gql, useQuery} from '@apollo/client'
import {getApolloClient} from "../../hooks";
import React, {ReactElement} from "react";
import {UserAccount} from "../../pages";

export type LoginProps = {
  updateUserAcc: (account : UserAccount) => void
}

export const LoginTemplate = ({updateUserAcc} : LoginProps) : ReactElement => {
  const {data, loading} = useQuery(gql`
    query {
        _
    }
  `)
  
  if (loading) {
    console.log('loading...')
  } else {
    console.log(data)
  }
  
  const login = async (acc) => {
    // const client = getApolloClient()
    // const {data} = await client.query({
    //   query: gql``
    // });
    //
    // console.debug(data)
    
    updateUserAcc(acc)
  }
  
  return (
    <div>
      <Head>
        <title>치우기전에, 로그인하세요</title>
      </Head>
      <ul>
        {['user1', 'user2', 'admin1'].map((account : UserAccount) => (
          <li key={account}>
            <button onClick={() => login(account)}>{account}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
