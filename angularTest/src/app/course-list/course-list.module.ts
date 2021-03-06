import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseListItemComponent } from './course-list-item/course-list-item.component'
import { CourseListComponent } from './course-list/course-list.component'
import { FormsModule } from '@angular/forms'
import { NewCourseComponent } from './new-course/new-course.component'

@NgModule({
  declarations: [FormsModule, CourseListItemComponent, CourseListComponent, NewCourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  exports: [CourseListComponent],
})
export class CourseListModule {}
