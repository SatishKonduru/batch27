import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {
  name = 'RSK';
  age = 44;

  getMyName() {
    return this.name;
  }
}
