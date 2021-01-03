import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './component/component';
import { UsersWithPresenterComponent } from './presenter/component';
import { UserCounterComponent } from './presenter/counter/component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [UsersComponent, UsersWithPresenterComponent, UserCounterComponent],
  exports: [UsersComponent, UsersWithPresenterComponent, UserCounterComponent, CommonModule]
})
export class UsersTestModule {}
