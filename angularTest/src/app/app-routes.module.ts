import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { CoursePageComponent } from './pages/course-page/course-page.component'
import { NewCourseComponent } from './course-list/new-course/new-course.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    component: CoursePageComponent,
  },
  {
    path: 'courses/:id',
    component: CoursePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new-course',
    component: NewCourseComponent,
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
