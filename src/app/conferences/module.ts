import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ConferencesComponent } from './container/component';

@NgModule({
  declarations: [ConferencesComponent],
  imports: [CommonModule, MatListModule],
  exports: [ConferencesComponent],
})
export class ConferencesModule {}
