import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalTreatmentRoutingModule } from './medical-treatment-routing.module';
import { ListComponent } from './list/list.component';
import { I18nModule } from '../i18n/i18n.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MedicalTreatmentRoutingModule,
    I18nModule
  ]
})
export class MedicalTreatmentModule { }
