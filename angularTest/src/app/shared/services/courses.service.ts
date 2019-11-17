import { Injectable } from '@angular/core'
import { Observable, of, throwError, BehaviorSubject } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { CourseListItem } from 'src/app/course-list/course-list-item.interface'

const courseItems = [
  {
    id: '1',
    title: 'Video Course 1. Name tag',
    duration: 60,
    creationDate: '11.10.2019',
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    top: true,
  },
  {
    id: '2',
    title: 'Video Course 2. Name tag',
    duration: 120,
    creationDate: '12.20.2019',
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    top: true,
  },
  {
    id: '3',
    title: 'Item 3',
    duration: 30,
    creationDate: '10.02.2019',
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    top: false,
  },
  {
    id: '4',
    title: 'Item 4',
    duration: 245,
    creationDate: '12.20.2019',
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    top: false,
  },
]

const courseItemsObservable: Observable<Array<CourseListItem>> = of(courseItems)

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  filter: BehaviorSubject<string> = new BehaviorSubject<string>('')
  public filter$ = this.filter.asObservable()

  constructor() {}

  getCourses(): Observable<CourseListItem[]> {
    return courseItemsObservable
  }

  getCourse(id: string | number): Observable<CourseListItem> {
    return this.getCourses().pipe(
      map((nodata: Array<CourseListItem>) => nodata.find(item => item.id === +id)),
      catchError(err => throwError('Error in getCourse'))
    )
  }

  removeItem(item: CourseListItem) {
    const i = courseItems.findIndex(it => it.id === item.id)

    if (i > -1) {
      courseItems.splice(i, 1)
    }
  }

  getFilterText(): BehaviorSubject<string> {
    return this.filter
  }

  addCourse() {}
}
