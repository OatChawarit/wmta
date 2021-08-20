import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPartnerRoutingModule } from './register-partner-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RegisterPartnerRoutingModule
  ]
})
export class RegisterPartnerModule { }
