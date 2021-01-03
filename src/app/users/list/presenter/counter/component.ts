import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersPresenter } from '../presenter';

@Component({
  selector: 'app-user-counter',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCounterComponent {
  constructor(public presenter: UsersPresenter) {}
}
