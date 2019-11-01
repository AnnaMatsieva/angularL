import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseListItemComponent } from './course-list-item/course-list-item.component'
import { CourseListComponent } from './course-list/course-list.component'

@NgModule({
  declarations: [CourseListItemComponent, CourseListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  exports: [CourseListComponent],
})
export class CourseListModule {}
