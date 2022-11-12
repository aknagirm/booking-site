import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);

  get isLoading(): BehaviorSubject<boolean> {
    return this.loading;
  }
}
