import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  standalone: true,
  imports: [],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
})
export class SelectedCourseComponent implements OnInit {
  // constructor(private _activatedRoute: ActivatedRoute){}
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  myCourse: any;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      const getParams = params.get('course');
      this.myCourse = JSON.parse(getParams);
    });
    console.log('Selected course in SelectedCourse Component :', this.myCourse);
  }
  goBack() {
    this._router.navigate(['/courseDetails', this.myCourse.id]);
  }
}
