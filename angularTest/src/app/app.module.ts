import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CoreModule } from './core/core.module'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'
import { FormsModule } from '@angular/forms'

import { CoursePageComponent } from './pages/course-page/course-page.component'
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component'
import { SearchComponent } from './search/search.component'
import { LoadMoreComponent } from './load-more/load-more.component'
import { CourseListComponent } from './course-list/course-list/course-list.component'
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component'
import { UsersComponent } from './users/users/users.component'
import { SharedModule } from './shared/shared.module'
import { BorderColorDirective } from './shared/directives/border-color.directive'
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    LoadMoreComponent,
    CourseListComponent,
    CourseListItemComponent,
    UsersComponent,
    BorderColorDirective,
    ModalDialogComponent,
  ],
  imports: [BrowserModule, FormsModule, SharedModule, FontAwesomeModule, CoreModule, RouterModule.forRoot(ROUTES)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
