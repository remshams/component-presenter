import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { UsersBlocComponent } from './container/bloc/component';
import { UsersComponent } from './container/component/component';
import { UsersMenuComponent } from './container/menu/component';
import { UsersRoutingModule } from './routing.module';

@NgModule({
  declarations: [UsersComponent, UsersBlocComponent, UsersMenuComponent],
  imports: [UsersRoutingModule, CommonModule, MatListModule, MatTabsModule],
  exports: [UsersComponent]
})
export class UsersModule {}
