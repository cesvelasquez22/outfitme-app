import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Profile } from '@pages/profiles';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _user = new BehaviorSubject<Partial<User> | null>(null);
  readonly user$ = this._user.asObservable();
  private readonly USER_KEY = 'user';

  private readonly PROFILE_KEY = 'profile';
  private _profile = new BehaviorSubject<Partial<Profile> | null>(null);
  readonly profile$ = this._profile.asObservable();

  constructor() {
    const userLocalStorage = localStorage.getItem(this.USER_KEY);
    if (userLocalStorage) {
      this.user = JSON.parse(userLocalStorage);
    }

    const profileLocalStorage = localStorage.getItem(this.PROFILE_KEY);
    if (profileLocalStorage) {
      this.profile = JSON.parse(profileLocalStorage);
    }
  }

  get user() {
    return this._user.getValue();
  }

  set user(user: Partial<User> | null) {
    this._user.next(user);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  get profile() {
    return this._profile.getValue();
  }

  set profile(profile: Partial<Profile> | null) {
    this._profile.next(profile);
    localStorage.setItem(this.PROFILE_KEY, JSON.stringify(profile));
  }

  async checkProfile() {
    const profile = this.profile;
    if (profile) {
      return true;
    }
    return false;
  }
}
