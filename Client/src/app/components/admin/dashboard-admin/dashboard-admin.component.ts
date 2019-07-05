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
  hide = true;
  classMenu;
  
  title = 'Dashboard Admin';
  categories = [
    {
      value: 'usuario',
      option: 'Usuario'
    },
    {
      value: 'facultad',
      option: 'Facultad'
    },
    {
      value: 'carrera',
      option: 'Carrera'
    },
    {
      value: 'cargo',
      option: 'Cargo'
    },
    {
      value: 'reporte',
      option: 'Reporte'
    },
    {
      value: 'Sign Out',
      option: 'Sign Out'
    }
  ]
  
  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.getItem('session');
    if (localStorage.getItem('session') == null)
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
