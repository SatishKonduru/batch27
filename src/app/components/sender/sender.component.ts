import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ReceiverComponent } from '../receiver/receiver.component';
import { TopicComponent } from '../topic/topic.component';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [MatDividerModule, CommonModule, ReceiverComponent, TopicComponent],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {
  topic = 'Component Communication';
  message = 'This message is from Sender Component';
  incomingData;
}
