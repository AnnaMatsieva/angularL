import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CoreModule } from './core/core.module'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { CoursePageComponent } from './pages/course-page/course-page.component'
import { SearchComponent } from './search/search.component'
import { LoadMoreComponent } from './load-more/load-more.component'
import { SharedModule } from './shared/shared.module'
import { BorderColorDirective } from './shared/directives/border-color.directive'
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component'
import { LoginComponent } from './login/login.component'
import { AppRoutesModule } from './app-routes.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NewCourseComponent } from './course-list/new-course/new-course.component'
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component'
import { CourseListComponent } from './course-list/course-list/course-list.component'
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursePageComponent,
    SearchComponent,
    LoadMoreComponent,
    BorderColorDirective,
    ModalDialogComponent,
    LoginComponent,
    PageNotFoundComponent,
    NewCourseComponent,
    BreadcrumbsComponent,
    CourseListComponent,
    CourseListItemComponent,
    CoursePageComponent,
  ],
  imports: [BrowserModule, FormsModule, SharedModule, FontAwesomeModule, CoreModule, RouterModule.forRoot([]), AppRoutesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
