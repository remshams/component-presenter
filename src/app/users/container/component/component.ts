import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersBloc } from '@app/common/users/bloc';
import { Observable } from 'rxjs';
import { extractUserNames } from '../operators';

@Component({
  selector: 'app-users',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  readonly usernames$: Observable<ReadonlyArray<string>>;

  constructor(private usersBloc: UsersBloc) {
    this.usernames$ = this.setupUsers();
  }

  ngOnInit(): void {
    this.usersBloc.refreshUsers();
  }

  private setupUsers(): Observable<ReadonlyArray<string>> {
    return this.usersBloc.users$.pipe(extractUserNames());
  }
}
