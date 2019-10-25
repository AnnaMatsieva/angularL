import { Component, OnInit, Input } from '@angular/core'
import { CourseListItem } from '../course-list-item.interface'
import { faClock, faCalendarAlt, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
})
export class CourseListItemComponent implements OnInit {
  @Input() public item: CourseListItem

  public faClock = faClock
  public faCalendarAlt = faCalendarAlt
  public faPen = faPen
  public faTrashAlt = faTrashAlt

  constructor() {}

  ngOnInit() {}
}
