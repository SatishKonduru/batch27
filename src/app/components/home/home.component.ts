import { ChangeDetectionStrategy, Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ServicesComponent } from '../services/services.component';
import { ProductsComponent } from '../products/products.component';
import { CareersComponent } from '../careers/careers.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { DemoComponent } from '../demo/demo.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from "../comp1/comp1.component";
import { Comp2Component } from "../comp2/comp2.component";
import {MatIconModule} from '@angular/material/icon';


interface myCounter{
  value: number
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    DemoComponent,
    FormsModule,
    Comp1Component,
    Comp2Component,
    MatIconModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // encapsulation: ViewEncapsulation.None
  preserveWhitespaces: true,

})


export class HomeComponent implements OnInit {
  // inputValue = '';
  // check = 0

  ngOnInit(): void {
    // setInterval(() => {
    //   this.check++
    //   console.log("Check Value: ", this.check)
    // }, 1000)
  }


  // onClick(value: any) {
  //   this.inputValue = value;
  //   this.inputValue.push(value);
  // }

  //  counter = 0
  // counter = signal(0).asReadonly()
  // counter = signal(0) => Primivite Data type
  counter = signal<myCounter>({value: 100})
  increment(){
    // this.counter++;
    // this.counter.set(this.counter() + 1)
    // this.counter.update(counter => counter + 1)
    // this.counter().value++
    // this.counter.set({value: this.counter().value+1})
    this.counter.update(counter => ({
      ...counter,
      value: counter.value+1
    }))
  }

  decrement(){
    // this.counter--;
    // this.counter.set(this.counter() - 1)
    // this.counter.update(currentState => currentState - 1)
    // this.counter().value--
    // this.counter.set({value: this.counter().value - 1})
    this.counter.update(c => ({
      ...c ,
      value: c.value - 1
    }))
  }

  check: boolean = false
  toggle(){
    this.check = !this.check
  }
}
