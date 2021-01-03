import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersComponentPresenter } from '../list/presenter/presenter';

@Component({
  selector: 'app-user-counter',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCounterComponent implements OnInit {
  constructor(public presenter: UsersComponentPresenter) {}

  ngOnInit(): void {}
}
