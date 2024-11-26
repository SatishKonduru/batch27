import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
  preserveWhitespaces: true,
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
    }); //for accessing route params

    // this._activatedRoute.queryParams.subscribe((params) => {
    //   this.myCourse = JSON.parse(params['courseData']);
    // });
    console.log('Selected course in SelectedCourse Component :', this.myCourse);
  }
  goBack() {
    this._router.navigate(['/courseDetails', this.myCourse.id]);
  }

  viewDetails() {
    this._router.navigate(['selectedCourseDetails'], {
      relativeTo: this._activatedRoute,
    });
  }
}
