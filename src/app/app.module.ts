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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavbarComponent,
        PhoneLoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
    providers: [],
    exports: [
        NavbarComponent,
        SideNavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
