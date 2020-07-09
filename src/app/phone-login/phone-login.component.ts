import { Component, OnInit } from '@angular/core';
import { WindowService} from '../window.service';
import * as firebase from 'firebase';
import { Router} from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

export class PhoneNumber{
  country: string;
  area: string;
  prefix: string;
  line: string;
  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;

  registerForm = new FormGroup({
    admin: new FormControl('')
  });

  constructor(private win: WindowService, private router: Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {
    const { admin } = this.registerForm.value;
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      }).catch(error => {
        console.log(error);
    });
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult.confirm(this.verificationCode)
      .then(result => {
        this.user = result.user;
        if (this.user){
          this.router.navigate(['home']);
        }
      }).catch(error => {
        console.log(error, "¿Ingresaste bien código?");
    });
  }

}
