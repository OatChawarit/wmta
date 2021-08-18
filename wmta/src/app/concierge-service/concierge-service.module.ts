import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciergeServiceRoutingModule } from './concierge-service-routing.module';
import { PersonalAssistantComponent } from './personal-assistant/personal-assistant.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';


@NgModule({
  declarations: [
    PersonalAssistantComponent,
    EnquiryFormComponent
  ],
  imports: [
    CommonModule,
    ConciergeServiceRoutingModule
  ]
})
export class ConciergeServiceModule { }
