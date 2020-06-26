import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  alert = false;
  alert0 = false;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    conf: new FormControl(''),
    admin: new FormControl(''),
  });

  constructor(private authS: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const { email, password, conf, admin} = this.registerForm.value;
    if (admin === '1234'){
      if (password === conf){
        try{
          const user = await this.authS.register(email, password);
          if (user){
            this.router.navigate(['home']);
          }
        }catch (e) {
          console.log(e);
        }
      }else{
        this.alert = true;
        console.log("las contras son diferentes");
      }
    }else{
      this.alert0 = true;
      console.log("no tienes permisos para registrarte brou");
    }
  }
}
