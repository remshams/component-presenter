import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '@app/common/users/service';
import { Observable } from 'rxjs';
import { extractNumberOfUsers, extractUserNames } from '../operators';

@Component({
  selector: 'app-users',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  readonly userNames$: Observable<ReadonlyArray<string>>;
  readonly userCount$: Observable<number>;

  constructor(private usersService: UsersService) {
    this.userNames$ = this.setupUsers();
    this.userCount$ = this.setupUserCount();
  }

  ngOnInit(): void {
    this.usersService.refreshUsers();
  }

  private setupUsers(): Observable<ReadonlyArray<string>> {
    return this.usersService.users$.pipe(extractUserNames());
  }

  private setupUserCount(): Observable<number> {
    return this.usersService.users$.pipe(extractNumberOfUsers());
  }
}
