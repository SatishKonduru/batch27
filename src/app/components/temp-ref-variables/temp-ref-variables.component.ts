import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-temp-ref-variables',
  standalone: true,
  imports: [
    MatDividerModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './temp-ref-variables.component.html',
  styleUrl: './temp-ref-variables.component.css',
})
export class TempRefVariablesComponent {
  myMessage: string = '';
  getInputValue(v: any) {
    this.myMessage = v;
  }
}
