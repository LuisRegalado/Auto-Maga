import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment} from '../environments/environment';
import { SideNavbarComponent} from './shared/side-navbar/side-navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
    ],
    providers: [],
    exports: [
        NavbarComponent,
        SideNavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
