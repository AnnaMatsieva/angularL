import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { CoursePageComponent } from './pages/course-page/course-page.component'

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
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
