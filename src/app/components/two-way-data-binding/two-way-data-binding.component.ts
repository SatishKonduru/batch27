import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [
    MatDividerModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css',
})
export class TwoWayDataBindingComponent {
  myMsg = '';
}
