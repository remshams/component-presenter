import { Injectable } from '@angular/core';
import { UsersService } from '@app/common/users/service';
import { Observable } from 'rxjs';
import { extractUserNames } from '../operators';

@Injectable()
export class UsersComponentPresenter {
  readonly usernames$: Observable<ReadonlyArray<string>>;

  constructor(private usersService: UsersService) {
    this.usernames$ = this.setupUserNames();

    this.onInit();
  }

  private setupUserNames(): Observable<ReadonlyArray<string>> {
    return this.usersService.users$.pipe(extractUserNames());
  }

  private onInit(): void {
    this.usersService.refreshUsers();
  }
}
