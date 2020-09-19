import {gql} from "@apollo/client";

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
