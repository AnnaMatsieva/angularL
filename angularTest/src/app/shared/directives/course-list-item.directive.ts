import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appCourseListItem]',
})
export class CourseListItemDirective {
  constructor(private element: ElementRef) {}
}
