import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalAssistantComponent } from './personal-assistant/personal-assistant.component';

const routes: Routes = [
  { path: '', component: PersonalAssistantComponent },
  { path: 'personal-assistant', component: PersonalAssistantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciergeServiceRoutingModule { }
