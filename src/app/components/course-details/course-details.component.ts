import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

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
  couseService = inject(CourseService)
  courseKeys = [];
  courseList = [];

  ngOnInit(): void {
    this.getCourseDetails()
    // this.courseKeys = Object.keys(this.courseList[0]);
    // console.log(this.courseKeys);
    this._activatedRoute.paramMap.subscribe((p) => {
      if (p) {
        this.courseId = p.get('id');
      }
    });
  }

  getCourseDetails(){
    this.couseService.courseNames().subscribe({
      next: (res: any) => {
        this.courseList = res
        this.courseKeys = Object.keys(this.courseList[0])
      },
      error: (err: any) =>
        console.log("Error while getting course Details: ", err)
    })
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
