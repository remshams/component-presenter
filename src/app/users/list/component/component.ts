import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '@app/common/users/service';
import { Observable } from 'rxjs';
import { extractUserNames } from '../../operators';

@Component({
  selector: 'app-users',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  readonly usernames$: Observable<ReadonlyArray<string>>;

  constructor(private usersService: UsersService) {
    this.usernames$ = this.setupUsers();
  }

  ngOnInit(): void {
    this.usersService.refreshUsers();
  }

  private setupUsers(): Observable<ReadonlyArray<string>> {
    return this.usersService.users$.pipe(extractUserNames());
  }
}
