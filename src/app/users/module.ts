import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { UsersComponent } from './list/component/component';
import { UsersWithPresenterComponent } from './list/presenter/component';
import { UserCounterComponent } from './list/presenter/counter/component';
import { UsersMenuComponent } from './menu/component';
import { UsersRoutingModule } from './routing.module';

@NgModule({
  declarations: [UsersComponent, UsersWithPresenterComponent, UsersMenuComponent, UserCounterComponent],
  imports: [UsersRoutingModule, CommonModule, MatListModule, MatTabsModule],
  exports: [UsersComponent]
})
export class UsersModule {}
