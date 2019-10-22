import { Component, OnInit, Input } from '@angular/core'
import { CourseListItem } from '../course-list-item.interface'

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
})
export class CourseListItemComponent implements OnInit {
  @Input() public item: CourseListItem
  constructor() {}

  ngOnInit() {}
}
