import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnChanges {
  @Input() message: any;
  constructor() {
    // console.log('Demo Constructor Called....');
    // console.log('Message in Demo Constructor: ', this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Demo OnChanges Called....');
    console.log('Message in Demo OnChanges: ', this.message);
    console.log('message: SimpleChange', changes);
  }
}
