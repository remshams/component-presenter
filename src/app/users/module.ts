import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { UsersCounterComponent } from './counter/component';
import { UsersComponent } from './list/component/component';
import { UsersWithPresenterComponent } from './list/presenter/component';
import { UsersMenuComponent } from './menu/component';
import { UsersRoutingModule } from './routing.module';

@NgModule({
  declarations: [UsersComponent, UsersWithPresenterComponent, UsersMenuComponent, UsersCounterComponent],
  imports: [UsersRoutingModule, CommonModule, MatListModule, MatTabsModule],
  exports: [UsersComponent]
})
export class UsersModule {}
