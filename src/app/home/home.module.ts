import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
