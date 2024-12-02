import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    Comp2Component
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // encapsulation: ViewEncapsulation.None
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
}
