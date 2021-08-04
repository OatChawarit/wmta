import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeRoutingModule } from './include-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IncludeRoutingModule
  ]
})
export class IncludeModule { }
