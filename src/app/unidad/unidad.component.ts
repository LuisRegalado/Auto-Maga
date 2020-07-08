import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  loading = false;
  textoenviar="Enviar";
  exito=false;

  constructor(private formBuilder: FormBuilder, public apis:ApisService) { }

  modelo=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  gas=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  condicion=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  numero=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  enviar(){
    this.loading=true;
    this.textoenviar="Enviando..."
    let datos={
      modelo:this.modelo.value,
      gas:this.gas.value,
      condicion:this.condicion.value,
      numero:this.numero.value
   }

  this.apis.unidad("https://app-node-46ee6.web.app/api/createUnity",datos).subscribe(
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
