import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Observable}from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {

  public user$: Observable <any> = this.authS.afAuth.user;
  
  constructor(private authS: AuthService) { }

  ngOnInit(): void {
  }

}
