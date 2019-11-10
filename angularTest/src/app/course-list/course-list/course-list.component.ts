import { Component, OnInit } from '@angular/core'
import { CourseListItem } from '../course-list-item.interface'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public faPlus = faPlus
  public search = ''

  public courseItems: CourseListItem[] = [
    {
      id: '1',
      title: 'Video Course 1. Name tag',
      time: '1h 28min',
      date: '9Nov, 2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
    {
      id: '2',
      title: 'Video Course 2. Name tag',
      time: '1h',
      date: '15Nov, 2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
    {
      id: '3',
      title: 'Item 3',
      time: '1h 28min',
      date: '9Nov, 2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
  ]

  ngOnInit() {}

  onAddCourseClick() {
    console.log('onAddCourseClick')
  }

  onDeleteCourseClick(id) {
    this.courseItems = this.courseItems.filter(item => item.id !== id)
  }

  onSearchClick(searchValue: string) {
    console.log(searchValue)
  }
}
