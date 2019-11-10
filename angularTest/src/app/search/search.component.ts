import { Component, OnInit } from '@angular/core'
import { FilterPipe } from '../shared/pipes/filter.pipe'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FilterPipe],
})
export class SearchComponent implements OnInit {
  public searchValue
  constructor() {}

  ngOnInit() {}

  onSearchClick(searchValue: string) {
    console.log(searchValue)
  }
}
