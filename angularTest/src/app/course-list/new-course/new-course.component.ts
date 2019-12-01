import { Component, OnInit } from '@angular/core'
import { CCourseListItem } from '../course-list-item.interface'

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
})
export class NewCourseComponent implements OnInit {
  public courseItems: CCourseListItem

  constructor() {}

  ngOnInit() {
    this.courseItems = new CCourseListItem()
  }

  onCancelClick() {
    this.courseItems = new CCourseListItem()
  }

  onSaveClick() {
    console.log(this.courseItems)
  }
}
