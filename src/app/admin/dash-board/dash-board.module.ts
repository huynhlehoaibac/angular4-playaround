import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  declarations: [
    DashBoardComponent
  ]
})
export class DashBoardModule { }
