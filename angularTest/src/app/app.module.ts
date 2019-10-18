import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { CoursePageComponent } from './course-page/course-page.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './shared/search/search.component';
import { LoadMoreComponent } from './shared/load-more/load-more.component';
import { CourseListComponent } from './shared/course-list/course-list/course-list.component';
import { CourseListItemComponent } from './shared/course-list/course-list-item/course-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    LoadMoreComponent,
    CourseListComponent,
    CourseListItemComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
