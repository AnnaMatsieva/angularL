import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseListItem[] = [
    {
      id: 1,
      title: 'Item 1',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    {
      id: 2,
      title: 'Item 2',
      time: '1h',
      date: '15Nov, 2019',
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    {
      id: 3,
      title: 'Item 3',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    {
      id: 4,
      title: 'Item 4',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    {
      id: 5,
      title: 'Item 5',
      time: '1h 28min',
      date: '9Nov, 2019',
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    }
  ];

  ngOnInit() {
  }

}
