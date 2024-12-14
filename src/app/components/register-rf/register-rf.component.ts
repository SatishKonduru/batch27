import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register-rf',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSelectModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register-rf.component.html',
  styleUrl: './register-rf.component.css'
})
export class RegisterRfComponent implements OnInit{
  registerForm : any = FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName : new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl(null),
      address1: new FormControl(null),
      address2: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      region: new FormControl(null),
      postalCode: new FormControl(null)
    })
  }


  onClick(){
    const formData = this.registerForm.value
    console.log("Form Data: ", formData)
  }

}
