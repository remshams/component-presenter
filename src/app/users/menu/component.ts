import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-menu',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersMenuComponent {}
