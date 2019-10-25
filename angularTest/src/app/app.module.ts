import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CoreModule } from './core/core.module'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'

import { CoursePageComponent } from './pages/course-page/course-page.component'
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component'
import { SearchComponent } from './search/search.component'
import { LoadMoreComponent } from './load-more/load-more.component'
import { CourseListComponent } from './course-list/course-list/course-list.component'
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { UsersComponent } from './users/users/users.component'
import { AddCourseComponent } from './add-course/add-course.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    LoadMoreComponent,
    CourseListComponent,
    CourseListItemComponent,
    UsersComponent,
    AddCourseComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, CoreModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
