import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { SelectedCourseDetailsComponent } from './components/selected-course-details/selected-course-details.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard, authGuardChild } from './guards/auth.guard';
import { unsavedPageGuard } from './guards/unsaved-page.guard';
import { RegisterTDFComponent } from './components/register-tdf/register-tdf.component';
import { RegisterRfComponent } from './components/register-rf/register-rf.component';

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
    path: 'courseDetails/:id', //Route parameters
    component: CourseDetailsComponent,
  },
  {
    path: 'selectedCourse/:course', //Route Parameters
    component: SelectedCourseComponent,
    canActivateChild: [authGuardChild],
    children: [
      {
        path: 'selectedCourseDetails',
        component: SelectedCourseDetailsComponent,
      },
    ],
  },

  {
    path: 'selectedCourse', //Query params
    component: SelectedCourseComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [unsavedPageGuard]
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent,
    // canActivate: [authGuard]
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'register-tdf',
    component: RegisterTDFComponent

    },
  {
    path: 'register-rf',
    component: RegisterRfComponent
    // loadComponet: () => import ('./components/register-rf/register-rf.component').then(c => c.RegisterRfComponent)
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  }
];
