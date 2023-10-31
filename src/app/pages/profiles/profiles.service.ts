import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from './profiles.types';
import { StorageService } from '@core/services/storage';
import { map, shareReplay } from 'rxjs';

@Injectable()
export class ProfilesService {
  private readonly http = inject(HttpClient);
  private readonly storage = inject(StorageService);

  readonly profiles$ = this.http
    .get<Profile[]>(`${environment.api}/profiles`)
    .pipe(shareReplay(1));

  readonly profilesCount$ = this.profiles$.pipe(
    map((profiles) => profiles.length)
  );

  private readonly PROFILE_KEY = 'profile';

  setActiveProfile(profile: Profile) {
    this.storage.set(this.PROFILE_KEY, profile);
  }
}
