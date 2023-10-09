import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CreateUserDto, Credentials } from './user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable()
export class AuthService {
  private _user = new BehaviorSubject<Partial<User> | null>(null);
  readonly user$ = this._user.asObservable();

  private readonly ACCESS_TOKEN = 'accessToken';
  private readonly USER = 'user';
  constructor(private httpClient: HttpClient) {
    const userLocalStorage = localStorage.getItem(this.USER);
    if (userLocalStorage) {
      this.user = JSON.parse(userLocalStorage);
    }
  }

  // TODO: Store in Ionic Storage (IndexedDB)
  get accessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN) ?? '';
  }

  set accessToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  get user() {
    return this._user.getValue();
  }

  set user(user: Partial<User> | null) {
    this._user.next(user);
    localStorage.setItem(this.USER, JSON.stringify(user));
  }

  register({ email, fullName, passwords }: CreateUserDto) {
    return this.httpClient
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
    return this.httpClient
      .post<User>(`${environment.api}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((user) => {
          this.setCredentials(user);
        })
      );
  }

  private setCredentials({ token, ...user }: User) {
    this.accessToken = token;
    this.user = user;
  }
}
