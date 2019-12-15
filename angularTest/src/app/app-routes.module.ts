import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { NewCourseComponent } from './course-list/new-course/new-course.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './core/guards/auth-guard.service'
import { CourseListComponent } from './course-list/course-list/course-list.component'
import { CoursePageComponent } from './pages/course-page/course-page.component'

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CoursePageComponent,
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    component: NewCourseComponent,
  },
  {
    path: 'courses/new',
    canActivate: [AuthGuard],
    component: NewCourseComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
