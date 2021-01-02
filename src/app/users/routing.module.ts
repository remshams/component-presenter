import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './container/component/component';
import { UsersMenuComponent } from './container/menu/component';
import { UsersWithPresenterComponent } from './container/presenter/component';

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
