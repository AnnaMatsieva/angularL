import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseListItemComponent } from './course-list-item/course-list-item.component'
import { CourseListComponent } from './course-list/course-list.component'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [CourseListItemComponent, CourseListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule, SharedModule],
  exports: [CourseListComponent],
})
export class CourseListModule {}
