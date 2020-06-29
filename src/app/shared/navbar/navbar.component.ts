import { Component } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent{
  
  public user$: Observable <any> = this.authS.afAuth.user;
  constructor(private authS: AuthService, private router: Router) { }
  async onLogout()
  {
    try {
      await this.authS.logout();
      this.router.navigate(['login']);
    }catch (e) {
      console.log(e);
    }
  }
}
