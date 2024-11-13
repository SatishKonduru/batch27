import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SenderComponent } from '../sender/sender.component';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule, SenderComponent],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent {
  @Input() postMan;
  @Output() reply = new EventEmitter();

  onClick() {
    this.reply.emit('This message is from Recevier Component');
  }
}
