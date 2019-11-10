import { Pipe, PipeTransform } from '@angular/core'
import { CourseListItem } from 'src/app/course-list/course-list-item.interface'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(courseItems: CourseListItem[], search: string = ''): CourseListItem[] {
    if (!search.trim()) {
      return courseItems
    }
    return courseItems.filter(courseItems => {
      return courseItems.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
