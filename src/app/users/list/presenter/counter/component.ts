import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersPresenter } from '../presenter';

@Component({
  selector: 'app-user-counter',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCounterComponent implements OnInit {
  constructor(public presenter: UsersPresenter) {}

  ngOnInit(): void {}
}
