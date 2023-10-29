import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {
  private _user = new BehaviorSubject<Partial<User> | null>(null);
  readonly user$ = this._user.asObservable();

  private readonly USER = 'user';

  constructor() {
    const userLocalStorage = localStorage.getItem(this.USER);
    if (userLocalStorage) {
      this.user = JSON.parse(userLocalStorage);
    }
  }

  get user() {
    return this._user.getValue();
  }

  set user(user: Partial<User> | null) {
    this._user.next(user);
    localStorage.setItem(this.USER, JSON.stringify(user));
  }
}
