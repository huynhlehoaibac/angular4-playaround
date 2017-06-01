import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageTwoComponent } from './admin-page-two.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageTwoRoutingModule { }
