import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';

@NgModule({
  imports: [
    CommonModule,
    PageOneRoutingModule
  ],
  declarations: [PageOneComponent]
})
export class PageOneModule { }
