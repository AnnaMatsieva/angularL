import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.borderColor = 'green'
  }
}
