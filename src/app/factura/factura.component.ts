import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  form:any;
  exito=false;
  alert=false;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      entidad: ['', Validators.required],
     motivo: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     cantidad: ['', Validators.required],
     producto: ['', Validators.required]
 
    });
   }
   submit(){
    if (this.form.valid) {
      this.exito=true;
    }
    else{
      this.alert=true;
    }
   }
   
  ngOnInit(): void {
  }

}
