import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Observable}from 'rxjs'
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {
  elementType = 'url';
  value:any;
  public user$: Observable <any> = this.authS.afAuth.user;
  
  constructor(private authS: AuthService, public apis:ApisService) { 
    this.apis.getLinkApp().subscribe(
    data => {
      this.value = data["link"]; 
      console.log(this.value);
    },
    err => {
      console.log(err);
    }
    
  );
  }

  ngOnInit(): void {
  }

}
