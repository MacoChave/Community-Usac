import { Component, OnInit, HostBinding } from '@angular/core';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @HostBinding('class') clases = 'login';

  title: 'Sign in';

  user: User = {
    COD_USUARIO: 0,
    CARNET: 0,
    NO_REGISTRO: 0,
    NOMBRE: '',
    URL_FOTO: '',
    CORREO: '',
    TELEFONO: 0,
    CLAVE: '',
    ROL: '',
  }

  result: any;
  items: string[] = ['admin', 'user'];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.userService.validateUser(this.user).subscribe(
      res => this.result = res[0],
      err => console.error(err)
    );

    this.user.NOMBRE =  '';
    this.user.CLAVE =  '';
    this.user.ROL = '';

    this.checkResult();
  }

  checkResult() {
    if (this.result != null)
    {
      localStorage.setItem('session', JSON.stringify(this.result));
      if (this.result.ROL === 'admin')
        this.router.navigate(['administrador']);
      else
        this.router.navigate(['usuario']);
    }
    else alert('Credenciales no válidas');
  }
}
