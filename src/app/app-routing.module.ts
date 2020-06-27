import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhoneLoginComponent} from './phone-login/phone-login.component';
import {AboutComponent} from './about/about.component';
import {QuestionsComponent} from './questions/questions.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'phone',
    component: PhoneLoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
