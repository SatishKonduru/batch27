import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-register-tdf',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatCalendar],
  templateUrl: './register-tdf.component.html',
  styleUrl: './register-tdf.component.css'
})
export class RegisterTDFComponent {

}
