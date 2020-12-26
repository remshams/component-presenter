import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersComponentBloc } from './bloc';

@Component({
  selector: 'app-users-bloc',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersComponentBloc]
})
export class UsersBlocComponent implements OnInit {
  constructor(public bloc: UsersComponentBloc) {}

  ngOnInit(): void {}
}
