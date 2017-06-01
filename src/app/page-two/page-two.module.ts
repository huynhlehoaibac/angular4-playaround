import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule
  ],
  declarations: [PageTwoComponent]
})
export class PageTwoModule { }
