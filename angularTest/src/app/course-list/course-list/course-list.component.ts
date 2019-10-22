import { Component, OnInit } from '@angular/core'
import { CourseListItem } from '../course-list-item.interface'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseListItem[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: 'Text',
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      time: '1h',
      date: '15Nov, 2019',
      description: 'Text',
    },
    {
      id: 3,
      title: 'Item 3',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: 'Text',
    },
    {
      id: 4,
      title: 'Item 4',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: 'Text',
    },
    {
      id: 5,
      title: 'Item 5',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: 'Text',
    },
  ]

  ngOnInit() {}
}
