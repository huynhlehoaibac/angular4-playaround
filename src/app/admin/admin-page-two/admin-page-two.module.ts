import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageTwoRoutingModule } from './admin-page-two-routing.module';
import { AdminPageTwoComponent } from './admin-page-two.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPageTwoRoutingModule
  ],
  declarations: [AdminPageTwoComponent]
})
export class AdminPageTwoModule { }
