import { Component } from '@angular/core';
import {AuthService} from './auth/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'login';
  public user$: Observable <any> = this.authS.afAuth.user;
  constructor(private authS: AuthService) {
  }
}
