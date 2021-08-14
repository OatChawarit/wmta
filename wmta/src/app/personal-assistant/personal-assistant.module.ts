import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalAssistantRoutingModule } from './personal-assistant-routing.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    PersonalAssistantRoutingModule
  ]
})
export class PersonalAssistantModule { }
