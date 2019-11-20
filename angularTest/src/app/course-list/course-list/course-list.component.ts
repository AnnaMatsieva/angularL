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
  public top = false

  public courseItems: CourseListItem[] = [
    {
      id: '1',
      title: 'Video Course 1. Name tag',
      duration: 60,
      creationDate: '11.10.2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      top: true,
    },
    {
      id: '2',
      title: 'Video Course 2. Name tag',
      duration: 120,
      creationDate: '12.20.2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      top: true,
    },
    {
      id: '3',
      title: 'Item 3',
      duration: 30,
      creationDate: '10.02.2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      top: false,
    },
    {
      id: '4',
      title: 'Item 4',
      duration: 245,
      creationDate: '12.20.2019',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      top: false,
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
