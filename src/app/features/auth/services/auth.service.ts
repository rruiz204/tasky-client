import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';

// Queries & Mutations
import { LOGIN } from '../graphql/auth.mutations';
import { LoginMutationType } from "../graphql/auth.mutations"


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  login(email: string, password: string) {
    return this.apollo.mutate<LoginMutationType>({ mutation: LOGIN, variables: { email, password } })
      .pipe(map((res) => res.data?.loginUser));
  };
}
