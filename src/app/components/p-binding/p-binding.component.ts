import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-p-binding',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './p-binding.component.html',
  styleUrl: './p-binding.component.css',
})
export class PBindingComponent {
  myName = 'Renu';
  isDisabled = false;
}
