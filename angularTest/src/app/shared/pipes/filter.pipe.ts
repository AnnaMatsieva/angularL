import { Pipe, PipeTransform } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CourseListItem } from 'src/app/course-list/course-list-item.interface'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(courses$: Observable<Array<CourseListItem>>, searchValue: string): Observable<Array<CourseListItem>> {
    if (!searchValue) {
      return courses$
    }
    return courses$.pipe(map(x => x.filter(i => i.title.toLowerCase().includes(searchValue.toLowerCase()))))
  }
}
