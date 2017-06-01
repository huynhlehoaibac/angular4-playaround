import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageOneRoutingModule } from './admin-page-one-routing.module';
import { AdminPageOneComponent } from './admin-page-one.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPageOneRoutingModule
  ],
  declarations: [AdminPageOneComponent]
})
export class AdminPageOneModule { }
