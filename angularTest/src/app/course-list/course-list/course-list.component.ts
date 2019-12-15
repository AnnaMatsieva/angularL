import { Component, OnInit, OnDestroy } from '@angular/core'
import { CoursesService } from './../../shared/services/courses.service'
import { CourseListItem } from '../course-list-item.interface'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Observable, Subscription } from 'rxjs'
import { FilterPipe } from './../../shared/pipes/filter.pipe'
import { Router } from '@angular/router'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courses$: Observable<CourseListItem[]>
  private sub: Subscription

  public filter: string
  public faPlus = faPlus

  constructor(private coursesService: CoursesService, private filterPipe: FilterPipe, private router: Router) {}

  ngOnInit() {
    this.courses$ = this.getFilterCourses(this.coursesService.getCourses(), this.filter)

    this.sub = this.coursesService.getFilterText().subscribe(filter => {
      this.filter = filter
      this.courses$ = this.getFilterCourses(this.coursesService.getCourses(), this.filter)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getFilterCourses(courses$: Observable<Array<CourseListItem>>, searchText: string): Observable<Array<CourseListItem>> {
    return this.filterPipe.transform(courses$, searchText)
  }

  onAddCourseClick() {
    this.router.navigate(['courses/new'])
  }

  onDeleteCourseClick(item: CourseListItem) {
    this.coursesService.removeItem(item)
  }

  onEditCourseClick(item: CourseListItem) {
    this.router.navigate(['item', item.id])
  }
}
