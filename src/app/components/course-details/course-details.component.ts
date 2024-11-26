import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  // constructor(private _router: Router){}
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  courseId: any;
  selected = 'selected ';
  courseKeys = [];
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    {
      id: 2,
      name: 'Angular Material',
      tutor: 'Satish Konduru',
    },
    { id: 3, name: 'Bootstrap', tutor: 'RSK' },
    { id: 4, name: 'NodeJS', tutor: 'Renu' },
  ];

  ngOnInit(): void {
    this.courseKeys = Object.keys(this.courseList[0]);
    // console.log(this.courseKeys);
    this._activatedRoute.paramMap.subscribe((p) => {
      if (p) {
        this.courseId = p.get('id');
      }
    });
  }

  onSelect(course: any) {
    // console.log('Selected Course Details: ', course);
    this._router.navigate(['/selectedCourse', JSON.stringify(course)]); // using Route parameters
    // this._router.navigate(['/selectedCourse'], {
    //   queryParams: { courseData: JSON.stringify(course) },
    // });
  }

  getSelected(c: any) {
    return this.courseId == c.id;
  }
}
