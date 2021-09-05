import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { I18nModule } from '../i18n/i18n.module';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule
  ]
})
export class HomeModule { }
