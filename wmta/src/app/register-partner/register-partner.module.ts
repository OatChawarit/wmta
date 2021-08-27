import { NgModule } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';

import { RegisterPartnerRoutingModule } from './register-partner-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegisterPartnerRoutingModule
  ]
})
export class RegisterPartnerModule { }
