import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onLoginClick() {
    const el = document.getElementsByClassName('login') as HTMLCollectionOf<HTMLElement>
    if (true) {
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'block'
      }
      console.log('onLoginClick')
    }
  }

  onLogoffClick() {
    console.log('onLogoffClick')
  }
}
