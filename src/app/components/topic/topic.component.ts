import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { BackgroundDirective } from '../../directives/background.directive';
import { TextEventDirective } from '../../directives/text-event.directive';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [
    MatDividerModule,
    CommonModule,
    BackgroundDirective,
    TextEventDirective,
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css',
})
export class TopicComponent {
  @Input() topicName;

  lastEvent = { type: '', content: '' };

  handleTextEvent(e: { type: string; content: string }) {
    this.lastEvent = e;
    console.log('Event:', e.type, 'Content:', e.content);
  }
}
