import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MediaCsrComponent } from './media-csr/media-csr.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    MediaCsrComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
