import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-tdf',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatCalendar,MatRadioModule, MatSelectModule,MatButtonModule, FormsModule],
  templateUrl: './register-tdf.component.html',
  styleUrl: './register-tdf.component.css'
})
export class RegisterTDFComponent {
  gender = 'Male'

  onSubmit(form: NgForm ){
    //  console.log(form.value)
    //  console.log(form.controls.firstName.value)
    console.log(form)
  }
}
