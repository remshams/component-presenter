import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersBloc {
  private readonly users: BehaviorSubject<ReadonlyArray<User>>;

  readonly users$: Observable<ReadonlyArray<User>>;

  constructor() {
    this.users = new BehaviorSubject<ReadonlyArray<User>>([]);
    this.users$ = this.users.asObservable();
  }
}
