import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'course', //localhost:4200/course
    component: CourseComponent,
  },
  {
    path: 'courseDetails', //localhost:4200/courseDetails
    component: CourseDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
