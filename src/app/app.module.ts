import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment} from '../environments/environment';


import { SideNavbarComponent} from './shared/side-navbar/side-navbar.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { AboutComponent } from './about/about.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ApisService } from './apis.service'
import { HttpClientModule } from '@angular/common/http';
import { GraphicsComponent } from './graphics/graphics.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ChartsModule } from 'ng2-charts';
import { OptionsLoginComponent } from './options-login/options-login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { UnidadComponent } from './unidad/unidad.component';
import { ChoferComponent } from './chofer/chofer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacturaComponent } from './factura/factura.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavbarComponent,
        PhoneLoginComponent,
        AboutComponent,
        QuestionsComponent,
        ContactComponent,
        ContactoComponent,
        GraphicsComponent,
        OptionsLoginComponent,
        ClienteComponent,
        UnidadComponent,
        ChoferComponent,
        FacturaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [ApisService],

    exports: [
        NavbarComponent,
        SideNavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
