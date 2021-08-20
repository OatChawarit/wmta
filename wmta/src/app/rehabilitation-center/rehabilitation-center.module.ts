import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RehabilitationCenterRoutingModule } from './rehabilitation-center-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RehabilitationCenterRoutingModule
  ]
})
export class RehabilitationCenterModule { }
