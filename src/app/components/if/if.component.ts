import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
})
export class IfComponent {
  list = [10, 20, 30];
  show = true;
  student = {
    name: 'RSK',
    course: 'Angular',
  };
}
