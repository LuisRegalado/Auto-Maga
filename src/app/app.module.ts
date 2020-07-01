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
import { ClienteComponent } from './cliente/cliente.component';



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
        ClienteComponent,
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
    ChartsModule
  ],
  providers: [ApisService],

    exports: [
        NavbarComponent,
        SideNavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
