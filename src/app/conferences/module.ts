import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferencesComponent } from './container/component';

@NgModule({
  declarations: [ConferencesComponent],
  imports: [CommonModule],
  exports: [ConferencesComponent],
})
export class ConferencesModule {}
