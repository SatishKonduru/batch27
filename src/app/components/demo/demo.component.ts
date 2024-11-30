import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Observable, of, range } from 'rxjs';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit , AfterContentChecked, OnDestroy{
  // @Input() message: string[];
  @Input() message: any;
  @ViewChild('myMessage') myMsg: ElementRef;

  @ContentChild('para') paragraph: ElementRef;
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
    //  console.log('Demo DoCheck Called');
    // console.log("In Demo DoCheck , value of paragraph: ", this.paragraph)
  }

  ngAfterContentInit(): void {
    console.log("Demo ngAfterContentViewInit called...")
    // console.log("In Demo afterContentViewInit , value of paragraph: ", this.paragraph.nativeElement.innerHTML)
  }

  ngAfterContentChecked(): void {
    // console.log("Demo ngAfterContentViewChecked called...")
  }

  ngOnDestroy(): void {
    console.log("Demo onDestroy called...")
  }
  

}
