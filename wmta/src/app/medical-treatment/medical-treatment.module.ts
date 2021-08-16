import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalTreatmentRoutingModule } from './medical-treatment-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MedicalTreatmentRoutingModule
  ]
})
export class MedicalTreatmentModule { }
