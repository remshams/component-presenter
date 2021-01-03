import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersComponentPresenter } from './presenter';

@Component({
  selector: 'app-users-presenter',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersComponentPresenter]
})
export class UsersWithPresenterComponent implements OnInit {
  constructor(public presenter: UsersComponentPresenter) {}

  ngOnInit(): void {}
}
