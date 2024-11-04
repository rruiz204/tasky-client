import { gql } from "apollo-angular";
import { TokenModel } from "../../../core/models/token.model";

export type LoginMutationType = { loginUser: TokenModel };

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      type
      token
    }
  }
`;