import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { CoreModule } from '../../core/core.module'
import { FormsModule } from '@angular/forms'
import { CourseListModule } from '../../course-list/course-list.module'
import { BreadcrumbsComponent } from '../../breadcrumbs/breadcrumbs.component'
import { SearchComponent } from '../../search/search.component'
import { LoadMoreComponent } from '../../load-more/load-more.component'
import { CoursePageComponent } from './course-page.component'
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe'

@NgModule({
  declarations: [BreadcrumbsComponent, SearchComponent, LoadMoreComponent],
  imports: [BrowserModule, FormsModule, CoreModule, CourseListModule, FilterPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [FilterPipe],
  bootstrap: [CoursePageComponent],
})
export class CourseModule {}
