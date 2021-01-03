import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersPresenter } from './presenter';

@Component({
  selector: 'app-users-presenter',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersPresenter]
})
export class UsersWithPresenterComponent implements OnInit {
  constructor(public presenter: UsersPresenter) {}

  ngOnInit(): void {}
}
