import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersBloc } from 'src/app/_common/users/bloc';
import { User } from 'src/app/_common/users/model';

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
    return this.usersBloc.users$.pipe(this.extractUserNames());
  }

  private extractUserNames(): OperatorFunction<ReadonlyArray<User>, ReadonlyArray<string>> {
    return map(users => users.map(user => user.name));
  }
}
