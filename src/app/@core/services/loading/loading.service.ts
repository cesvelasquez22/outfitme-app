import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loading.asObservable();

  isLoading(value: boolean) {
    this._loading.next(value);
  }
}
