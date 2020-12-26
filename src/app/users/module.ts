import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UsersBlocComponent } from './container/bloc/component';
import { UsersComponent } from './container/component/component';
import { UsersRoutingModule } from './routing.module';

@NgModule({
  declarations: [UsersComponent, UsersBlocComponent],
  imports: [UsersRoutingModule, CommonModule, MatListModule],
  exports: [UsersComponent]
})
export class UsersModule {}
