import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from './profiles.types';
import { StorageService } from '@core/services/storage';
import { Subject, map, shareReplay } from 'rxjs';

@Injectable()
export class ProfilesService {
  private _profile = new Subject<Profile>();
  readonly profileDetail$ = this._profile.asObservable();

  private readonly http = inject(HttpClient);
  private readonly storage = inject(StorageService);

  readonly profiles$ = this.http
    .get<Profile[]>(`${environment.api}/profiles`)
    .pipe(shareReplay(1));

  private readonly PROFILE_KEY = 'profile';

  setActiveProfile(profile: Profile) {
    this.storage.set(this.PROFILE_KEY, profile);
  }
  
  getProfileById(id: number) {
    return this.http
      .get<Profile>(`${environment.api}/profiles/${id}`)
      .pipe(map((profile) => new Profile(profile)));
  }

  createProfile({ profileName }: Profile) {
    return this.http.post<Profile>(`${environment.api}/profiles`, { profileName });
  }

  updateProfile({ id, profileName }: Profile) {
    return this.http.patch<Profile>(`${environment.api}/profiles/${id}`, { profileName });
  }

  removeProfile(id: number) {
    return this.http.delete<Profile>(`${environment.api}/profiles/${id}`);
  }
}
