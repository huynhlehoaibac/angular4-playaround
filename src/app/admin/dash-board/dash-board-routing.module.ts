import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guard/auth-guard.service';
import { DashBoardComponent } from './dash-board.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin-page-one',
        loadChildren: '../admin-page-one/admin-page-one.module#AdminPageOneModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'admin-page-two',
        loadChildren: '../admin-page-two/admin-page-two.module#AdminPageTwoModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
