import { Component, OnInit } from '@angular/core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  public faPlus = faPlus

  constructor() {}

  ngOnInit() {}
}
