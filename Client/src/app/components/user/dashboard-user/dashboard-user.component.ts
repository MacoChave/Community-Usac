import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DetalleCargo } from 'src/app/models/DetalleCargo';
import { DetalleCargoService } from 'src/app/services/detalle-cargo.service';
import { MatDialog } from '@angular/material';
import { PickDetalleCargoComponent } from '../../modal/pick-detalle-cargo/pick-detalle-cargo.component';

@Component({
  selector: 'usuario',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  @HostBinding('class') clases = 'dashboard';
  
  title = 'Dashboard Usuario';
  hide = true;
  classMenu: string;
  user: User;
  detalleCargo: DetalleCargo = {
    CARGO: '',
    CARRERA: '',
    FACULTAD: '',
    NOMBRE: ''
  }

  constructor(
    private router: Router, 
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
    if (this.user == null)
      this.router.navigate(['']);
    this.classMenu = 'menu hide_menu';
    const dialogRef = this.dialog.open(
      PickDetalleCargoComponent, 
      {
        data: this.user,
        height: '40vh',
        width: '40vw'
      }
    )

    dialogRef.beforeClosed().subscribe(res => {
      this.detalleCargo = res;
    });
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
