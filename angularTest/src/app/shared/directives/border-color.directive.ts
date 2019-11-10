import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core'

import { CourseListItem } from '../../course-list/course-list-item.interface'

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') item: CourseListItem

  private currentDate: Date = new Date(new Date().toLocaleDateString())
  private creationDate: Date
  private twoWeeks: Date

  constructor(private element: ElementRef, private render: Renderer2) {
    // this.element.nativeElement.style.borderColor = 'green'
  }

  ngOnInit() {
    this.creationDate = new Date(this.item.creationDate)
    this.twoWeeks = new Date(new Date(new Date().toLocaleDateString()).setDate(this.creationDate.getDate() - 14))
    this.setBorderColor()
  }

  private setBorderColor() {
    if (this.creationDate < this.currentDate && this.creationDate >= this.twoWeeks) {
      this.render.setStyle(this.element.nativeElement, 'border-color', 'green')
    }

    if (this.creationDate > this.currentDate) {
      this.render.setStyle(this.element.nativeElement, 'border-color', 'blue')
    }
  }
}
