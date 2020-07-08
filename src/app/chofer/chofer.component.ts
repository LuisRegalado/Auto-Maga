import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {
  loading = false;
  textoenviar="Enviar";
  exito=false;
  constructor(private formBuilder: FormBuilder, public apis:ApisService) { }
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

  calle=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  numero=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  telefono=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  curp=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  enviar(){
    this.loading=true;
    this.textoenviar="Enviando..."
    let datos={
      nombre:this.nombre.value,
      apepat:this.apepat.value,
      apemat:this.apemat.value,
      calle:this.calle.value,
      numero:this.numero.value,
      telefono:this.telefono.value,
      curp:this.curp.value
   }

  this.apis.chofer("https://app-node-46ee6.web.app/api/createDriver",datos).subscribe(
    data => {
      let res:any = data; 
      console.log(
        `Todo salio perfecto y el mail se envio`
      );
    },
    err => {
      console.log(err);
     
    },() => {
      this.exito=true;
      this.loading = false;
      this.textoenviar = "Enviar";
    }
  );
  }



  ngOnInit(): void {
  }

}
