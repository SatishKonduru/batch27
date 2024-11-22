import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
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
    console.log(this.courseKeys);
  }
}
