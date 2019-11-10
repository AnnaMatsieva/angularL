import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchValue
  constructor() {}

  ngOnInit() {}

  onSearchClick(searchValue: string) {
    console.log(searchValue)
  }
}
