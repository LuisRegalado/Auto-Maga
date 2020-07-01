import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactoComponent}from './contacto/contacto.component'
import {PhoneLoginComponent} from './phone-login/phone-login.component';
import {AboutComponent} from './about/about.component';
import {QuestionsComponent} from './questions/questions.component';
import {ContactComponent} from './contact/contact.component';
import { GraphicsComponent } from './graphics/graphics.component';
import {OptionsLoginComponent} from "./options-login/options-login.component";
import {ClienteComponent} from './cliente/cliente.component'


export const routes: Routes = [
  {
    path: 'options',
    component: OptionsLoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'graphics',
    component: GraphicsComponent
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
  {path:'contacto', component:ContactoComponent },
  {path:'cliente', component:ClienteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
