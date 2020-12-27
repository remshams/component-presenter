import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersBlocComponent } from './container/bloc/component';
import { UsersComponent } from './container/component/component';
import { UsersMenuComponent } from './container/menu/component';

const routes: Routes = [
  {
    path: '',
    component: UsersMenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'component'
      },
      {
        path: 'component',
        component: UsersComponent
      },
      {
        path: 'bloc',
        component: UsersBlocComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
