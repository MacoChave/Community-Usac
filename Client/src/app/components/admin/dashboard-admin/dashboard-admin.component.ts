import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'administrador',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  @HostBinding('class') clases = 'dashboard';
  
  title = 'Dashboard Admin';
  hide = true;
  classMenu: string;
  user: User;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
    if (this.user == null)
      this.router.navigate(['']);
    this.classMenu = 'menu hide_menu';
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
