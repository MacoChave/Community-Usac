import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Sign in';
  name: string;
  pass: string;

  login() {
    this.name = '';
    this.pass = '';
  }
}
