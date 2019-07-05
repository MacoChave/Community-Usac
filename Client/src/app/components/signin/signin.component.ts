import { Component, OnInit, HostBinding } from '@angular/core';

import { User } from '../../models/User';
import { UserServiceService } from '../../services/user-service.service';
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
    cod_usuario: 0,
    carnet: 0,
    no_registro: 0,
    nombre: '',
    url_foto: '',
    correo: '',
    telefono: 0,
    clave: '',
    rol: '',
  }
  currentUser: User = {
    cod_usuario: 0,
    carnet: 0,
    no_registro: 0,
    nombre: '',
    url_foto: '',
    correo: '',
    telefono: 0,
    clave: '',
    rol: '',
  }
  result: any = [];
  items: string[] = ['admin', 'user'];

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    delete this.user.cod_usuario;
    delete this.user.carnet;
    delete this.user.no_registro;
    delete this.user.url_foto;
    delete this.user.correo;
    delete this.user.telefono;

    console.log(this.user);

    this.userService.validateUser(this.user).subscribe(
      res => this.result = res,
      err => console.error(err)
    );

    this.user.nombre =  '';
    this.user.clave =  '';
    this.user.rol = '';

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
