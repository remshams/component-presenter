import { Injectable } from '@angular/core';
import { UsersService } from '@app/common/users/service';
import { Observable } from 'rxjs';
import { extractNumberOfUsers, extractUserNames } from '../operators';

@Injectable()
export class UsersPresenter {
  readonly userNames$: Observable<ReadonlyArray<string>>;
  readonly userCount$: Observable<number>;

  constructor(private usersService: UsersService) {
    this.userNames$ = this.setupUserNames();
    this.userCount$ = this.setupUserCount();

    this.onInit();
  }

  private setupUserNames(): Observable<ReadonlyArray<string>> {
    return this.usersService.users$.pipe(extractUserNames());
  }

  private setupUserCount(): Observable<number> {
    return this.usersService.users$.pipe(extractNumberOfUsers());
  }

  private onInit(): void {
    this.usersService.refreshUsers();
  }
}
