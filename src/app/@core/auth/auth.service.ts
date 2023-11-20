import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CreateUserDto, Credentials, UserService } from '../user';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable()
export class AuthService {
  private _authenticated: boolean = false;
  private readonly ACCESS_TOKEN = 'accessToken';

  private readonly http = inject(HttpClient);
  private readonly userService = inject(UserService);

  get accessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN) ?? '';
  }

  set accessToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  register({ email, fullName, passwords }: CreateUserDto) {
    return this.http
      .post<User>(`${environment.api}/auth/register`, {
        email,
        fullName,
        password: passwords.password,
      })
      .pipe(
        tap((user) => {
          this.setCredentials(user);
        })
      );
  }

  login({ email, password }: Credentials) {
    return this.http
      .post<User>(`${environment.api}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((user) => {
          this._authenticated = true;
          this.setCredentials(user);
        })
      );
  }

  logout() {
    localStorage.clear();
  }

  /**
     * Check the authentication status
     */
  async check()
  {
      // Check if the user is logged in
      if ( this._authenticated )
      {
          return true;
      }

      // Check the access token availability
      if ( !this.accessToken )
      {
          return false;
      }

      return true;

      // // Check the access token expire date
      // if ( AuthUtils.isTokenExpired(this.accessToken) )
      // {
      //     return of(false);
      // }

      // If the access token exists and it didn't expire, sign in using it
      // return this.signInUsingToken();
  }

  private setCredentials({ token, ...user }: User) {
    this.accessToken = token;
    this.userService.user = user;
  }
}
