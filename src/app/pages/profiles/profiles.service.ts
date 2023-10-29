import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from './profiles.types';

@Injectable()
export class ProfilesService {
  readonly profiles$ = this.http.get<Profile[]>(`${environment.api}/profiles`);
  constructor(private http: HttpClient) {}
}
