import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferencesComponent } from './conferences/container/component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'conferences',
  },
  {
    path: 'conferences',
    component: ConferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
