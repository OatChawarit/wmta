import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElderlyCareRoutingModule } from './elderly-care-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ElderlyCareRoutingModule
  ]
})
export class ElderlyCareModule { }
