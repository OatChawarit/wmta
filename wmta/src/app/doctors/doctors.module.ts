import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { ListComponent } from './list/list.component';
import { I18nModule } from '../i18n/i18n.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    I18nModule
  ]
})
export class DoctorsModule { }
