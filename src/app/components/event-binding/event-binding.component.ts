import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [
    MatDividerModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  message: string = '';
  doubleClickMsg: string = '';
  hoverMsg: string = '';
  keyMsg: string = '';
  focusBlurMsg: string = '';
  selectedOption: string = '';
  resizeMsg: string = '';
  copyMsg: string = '';

  onButtonClick() {
    this.message = 'Button was Clicked';
  }

  onDoubleClick() {
    this.doubleClickMsg = 'Button was Double-Clicked';
  }

  onMouseOver() {
    this.hoverMsg = 'Mouse hovered on this Button';
  }

  onKeyDown(event: KeyboardEvent) {
    this.keyMsg = `${event.key}`;
  }

  onFocus() {
    this.focusBlurMsg = 'Input is Focused!';
  }

  onBlur() {
    this.focusBlurMsg = 'Input has LOST focus';
  }

  onChange(e: MatSelectChange) {
    this.selectedOption = `Selected: ${e.value}`;
  }

  onResize(e: Event) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.resizeMsg = `Window Size: ${width} x ${height}`;
  }

  onCopy() {
    this.copyMsg = 'Text Copied!';
  }
}
