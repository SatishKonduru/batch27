import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm : any = FormGroup
  formBuilder = inject(FormBuilder)
  private _router = inject(Router)

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }

  login(){
    const formData = this.loginForm.value
    console.log("Form Data: ",formData)
    this._router.navigate(['/userDashboard'])
    // if(formData.username === 'Satish'){
    //     this._router.navigate(['/userDashboard'])
    // }
    // if(formData.username === 'admin'){
    //   this._router.navigate(['/adminDashboard'])
    // }
  }

}
