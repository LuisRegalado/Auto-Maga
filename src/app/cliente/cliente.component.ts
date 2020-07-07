import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  value:any;
  constructor(private formBuilder: FormBuilder, public apis:ApisService) {
   }

   nombre=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  correo=new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  contra=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

   
   submit() {
     let datos={
        nombre:this.nombre.value,
        correo:this.correo.value,
        contra:this.contra.value
     }

    this.apis.usuarios("http://localhost:5000/api/createUser",datos).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `Todo salio perfecto y el mail se envio`
        );
      },
      err => {
        console.log(err);
       
      },() => {
       
      }
    );
    this.apis.getUsuarios().subscribe(
      data => {
        this.value = data; 
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
