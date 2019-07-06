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
  currentUser: User = {
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
  result: any = [];
  items: string[] = ['admin', 'user'];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    delete this.user.COD_USUARIO;
    delete this.user.CARNET;
    delete this.user.NO_REGISTRO;
    delete this.user.URL_FOTO;
    delete this.user.CORREO;
    delete this.user.TELEFONO;

    console.log(this.user);

    this.userService.validateUser(this.user).subscribe(
      res => this.result = res,
      err => console.error(err)
    );

    this.user.NOMBRE =  '';
    this.user.CLAVE =  '';
    this.user.ROL = '';

    this.checkResult();
  }

  checkResult() {
    console.log(this.result);
    if (this.result.length > 0)
    {
      localStorage.setItem('session', JSON.stringify(this.result[0]));
      if (this.result[0].ROL === 'admin')
        this.router.navigate(['administrador']);
      else
        this.router.navigate(['usuario']);
    }
    else console.log('Session failed');
  }
}
