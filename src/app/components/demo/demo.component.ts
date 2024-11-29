import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnChanges, OnInit, DoCheck {
  // @Input() message: string[];
  @Input() message: any;
  @ViewChild('myMessage') myMsg: ElementRef;
  constructor() {
    // console.log('Demo Constructor Called....');
    // console.log('Message in Demo Constructor: ', this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Demo OnChanges Called....');
    // console.log('Message in Demo OnChanges: ', this.message);
    // console.log('message: SimpleChange', changes);
  }

  ngOnInit(): void {
    console.log('Demo OnInit called....');
    // console.log(
    //   'MyMsg Value in OnInit method: ',
    //   this.myMsg.nativeElement.innerHTML
    // );
  }

  ngDoCheck(): void {
    // console.log('Demo DoCheck Called'); => Gets called For every change detection.
  }
}
