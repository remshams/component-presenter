import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersBloc } from 'src/app/_common/users/bloc';
import { extractUserNames } from '../operators';

@Injectable()
export class UsersComponentBloc {
  readonly usernames$: Observable<ReadonlyArray<string>>;

  constructor(private usersBloc: UsersBloc) {
    this.usernames$ = this.setupUserNames();

    this.onInit();
  }

  private setupUserNames(): Observable<ReadonlyArray<string>> {
    return this.usersBloc.users$.pipe(extractUserNames());
  }

  private onInit(): void {
    this.usersBloc.refreshUsers();
  }
}
