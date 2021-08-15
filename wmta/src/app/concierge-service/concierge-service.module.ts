import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciergeServiceRoutingModule } from './concierge-service-routing.module';
import { PersonalAssistantComponent } from './personal-assistant/personal-assistant.component';


@NgModule({
  declarations: [
    PersonalAssistantComponent
  ],
  imports: [
    CommonModule,
    ConciergeServiceRoutingModule
  ]
})
export class ConciergeServiceModule { }
