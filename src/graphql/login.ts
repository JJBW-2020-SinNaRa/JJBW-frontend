import {gql} from "@apollo/client";

export type Account = {
    idx: number | null;
    id: string | null;
    name: string | null;
    isAdmin: boolean | null;
    publicKey: string | null;
    privateKey: string | null;
}

export const LOGIN_QUERY = gql`
    mutation GetAccessTokenByID($id : String!) {
        getAccessTokenByID(id : $id) {
            payload {
                idx
            }
            token,
            expiredAt
            account {
                isAdmin
                name
                id
            }
        }
    }
`;
