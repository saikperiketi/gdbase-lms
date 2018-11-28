import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'godwin-lms',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    public router: Router
  ) {
    console.log(this.router);
  }
}
