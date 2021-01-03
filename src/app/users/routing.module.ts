import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './list/component/component';
import { UsersWithPresenterComponent } from './list/presenter/component';
import { UsersMenuComponent } from './menu/component';

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
        path: 'presenter',
        component: UsersWithPresenterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
