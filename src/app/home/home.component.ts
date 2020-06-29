import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Observable}from 'rxjs'
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {
  elementType = 'url';
  value = 'https://bit.ly/3dIPmra'
  public user$: Observable <any> = this.authS.afAuth.user;
  
  constructor(private authS: AuthService) { }

  ngOnInit(): void {
  }

}
