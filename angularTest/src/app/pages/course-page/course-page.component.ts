import { Component, OnInit } from '@angular/core'
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [FilterPipe],
})
export class CoursePageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
