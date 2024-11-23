import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';

export const routes: Routes = [
  {
    path: '', //localhost:4200
    redirectTo: '/home', //localhost:4200/home
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'course', //localhost:4200/course
    component: CourseComponent,
  },
  {
    path: 'courseDetails', //localhost:4200/courseDetails
    component: CourseDetailsComponent,
  },
  {
    path: 'courseDetails/:id',
    component: CourseDetailsComponent,
  },
  {
    path: 'selectedCourse/:course',
    component: SelectedCourseComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
