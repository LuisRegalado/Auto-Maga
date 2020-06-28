import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, public apis:ApisService) {
   }

   nombre=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  apepat=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  apemat=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  correo=new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  pregunta=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

   enviar(){
    let datos ={
      name: this.nombre.value,
      email: this.correo.value,
      apepat: this.apepat.value,
      apemat:this.apemat.value,
      pregunta:this.pregunta.value
    }
    
    this.apis.sendEmail("https://app-node-46ee6.web.app/sendmail",datos).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `Todo salio perfecto y el mail se envio`
        );
      }
    );
   
  }
  ngOnInit(): void {
  }

}
