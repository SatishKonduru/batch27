import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register-rf',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSelectModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register-rf.component.html',
  styleUrl: './register-rf.component.css',
  // changeDetection: ChangeDetectionStrategy.Default
})
export class RegisterRfComponent implements OnInit{
  registerForm : any = FormGroup
  changeDetetor = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName : new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('Male'),
      address: new FormGroup({
                address1: new FormControl(null),
                address2: new FormControl(null),
                country: new FormControl(null),
                city: new FormControl(null),
                region: new FormControl(null),
                postalCode: new FormControl(null)
      }),
      skills : new FormArray([]),
      experience: new FormArray([
        new FormGroup({
          cName: new FormControl(null),
          location: new FormControl(null)
        })
      ])

    })
  }


  onClick(){
    const formData = this.registerForm.value
    console.log("Form Data: ", formData)
  }

  addSkill(){
    (<FormArray>this.registerForm.controls.skills).push(new FormControl(null))
    this.changeDetetor.detectChanges()
  }

  deleteSkill(index: any){
    const control = <FormArray>this.registerForm.controls.skills
    control.removeAt(index)
  }


  addExperience(){
    (<FormArray>this.registerForm.controls.experience).push(new FormGroup({
      cName: new FormControl(null),
      location: new FormControl(null)
    }))
    this.changeDetetor.detectChanges()
  }
}
