import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
  providers: [AuthService]
})
export class SideNavbarComponent implements OnInit {
  public user$: Observable <any> = this.authS.afAuth.user;
  constructor(private authS: AuthService) { }

  ngOnInit(): void {
  }

}
