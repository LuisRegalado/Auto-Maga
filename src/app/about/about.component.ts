import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Observable}from 'rxjs'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AuthService]
})
export class AboutComponent implements OnInit {

  public user$: Observable <any> = this.authS.afAuth.user;
  
  constructor(private authS: AuthService) { }

  ngOnInit(): void {
  }

}
