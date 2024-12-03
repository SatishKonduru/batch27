import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit{
  courseList = [];
  private _courseService = inject(CourseService)

  ngOnInit(): void {
    this.getCourseNames()
  }
  getCourseNames(){
    this._courseService.courseNames().subscribe({
      next: (res: any) => {
        this.courseList = res
      },
      error: (err: any ) => {
        console.log("Error while fetching course names: ", err)
      }
    })
  }




}
