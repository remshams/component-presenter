import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersComponentPresenter } from './presenter';

@Component({
  selector: 'app-users-bloc',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersComponentPresenter]
})
export class UsersBlocComponent implements OnInit {
  constructor(public presenter: UsersComponentPresenter) {}

  ngOnInit(): void {}
}
