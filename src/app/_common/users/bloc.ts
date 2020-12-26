import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UsersRestAdapter, usersRestAdapterToken } from './model';

@Injectable({
  providedIn: 'root'
})
export class UsersBloc {
  private readonly users: BehaviorSubject<ReadonlyArray<User>>;

  readonly users$: Observable<ReadonlyArray<User>>;

  constructor(@Inject(usersRestAdapterToken) private usersRestAdapter: UsersRestAdapter) {
    this.users = new BehaviorSubject<ReadonlyArray<User>>([]);
    this.users$ = this.users.asObservable();
  }

  refreshUsers(): void {
    this.usersRestAdapter.list().subscribe(users => this.users.next(users));
  }
}
