import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

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

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }


}
