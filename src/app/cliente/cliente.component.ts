import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  form:any;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
     lastname: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     message: ['', Validators.required],
 
    });
   }
   
   submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }
  ngOnInit(): void {
  }

}
