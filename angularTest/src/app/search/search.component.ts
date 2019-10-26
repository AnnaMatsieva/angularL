import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  OnSearchClick() {
    console.log('onSearchClick')
  }

  onSearchClick(value: string) {
    console.log(value)
  }
}
