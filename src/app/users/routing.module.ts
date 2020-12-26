import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersBlocComponent } from './container/bloc/component';
import { UsersComponent } from './container/component/component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'container'
  },
  {
    path: 'container',
    component: UsersComponent
  },
  {
    path: 'bloc',
    component: UsersBlocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
