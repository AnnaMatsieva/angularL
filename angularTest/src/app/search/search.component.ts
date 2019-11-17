import { Component, OnInit } from '@angular/core'
import { CoursesService } from './../shared/services/courses.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchValue: string

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

  onSearchClick() {
    if (this.searchValue) {
      this.coursesService.filter.next(this.searchValue)
      console.log(this.searchValue)
    } else {
      this.coursesService.filter.next('')
    }
  }
}
