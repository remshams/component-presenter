import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './container/component/component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, MatListModule],
  exports: [UsersComponent]
})
export class UsersModule {}
