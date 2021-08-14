import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  { path: '',component: LoginComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'doctor', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)},
  { path: 'personal-assistant', loadChildren: () => import('./personal-assistant/personal-assistant.module').then(m => m.PersonalAssistantModule)},

  { path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
