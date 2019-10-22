import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
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
  ],
  imports: [BrowserModule, CoreModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
