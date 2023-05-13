import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  MOBILE_STRING: string[] = ['Android', 'iPhone'];

  constructor() { }

  getImage() {
    if (!!this.MOBILE_STRING.filter(option => navigator.userAgent.includes(option)).length) {
      console.log(navigator.userAgent)
      return '/assets/images/sm-main-banner.png';
    }

    return '/assets/images/lg-main-banner.png';
  }
}
