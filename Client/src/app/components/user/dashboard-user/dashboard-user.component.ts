import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'usuario',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  @HostBinding('class') clases = 'dashboard';
  
  title = 'Dashboard Usuario';
  hide = true;
  classMenu = 'menu hide_menu';
  user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
    console.log(this.user);
  }
  
  toggle() {
    this.hide = !this.hide;
    this.classMenu = this.hide ? 'menu hide_menu' : 'menu';
  }

  signOut() {
    localStorage.removeItem('session');
    this.router.navigate(['']);
  }
}
