import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { CourseListModule } from '../shared/course-list/course-list.module';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '../shared/search/search.component';
import { LoadMoreComponent } from '../shared/load-more/load-more.component';
import { CoursePageComponent } from './course-page.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SearchComponent,
    LoadMoreComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule
  ],
    providers: [],
    bootstrap: [CoursePageComponent]
})

export class CourseModule { }
