import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: any): any {
    const minutes = Math.floor(value / 60)
    const hoursStr = minutes ? `${minutes}h ` : ''
    const min = value - minutes * 60
    const minStr = min ? `${min} min` : ''

    if (!value) {
      return
    }

    return `${hoursStr}${minStr}`
  }
}
