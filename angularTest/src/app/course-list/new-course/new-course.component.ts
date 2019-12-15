import { Component, OnInit } from '@angular/core'
import { CCourseListItem } from '../course-list-item.interface'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { CoursesService } from 'src/app/shared/services/courses.service'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
})
export class NewCourseComponent implements OnInit {
  public courseItems: CCourseListItem

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit() {
    this.courseItems = new CCourseListItem()

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.get('id') ? this.coursesService.getCourse(+params.get('id')) : of(null)
        })
      )
      .subscribe(() => (this.courseItems = { ...this.courseItems }), err => console.log(err))
  }

  onCancelClick() {
    this.onGoBack()
  }

  onSaveClick() {
    const courseItems = { ...this.courseItems }
    const method = courseItems.id ? 'updateCourse' : 'createCourse'

    this.coursesService[method](courseItems)
    this.onGoBack()
  }

  onGoBack() {
    this.router.navigate(['/courses'])
  }
}
