import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import { CargoService } from 'src/app/services/cargo.service';
import { DetalleCargo } from 'src/app/models/DetalleCargo';
import { Rol } from 'src/app/models/Rol';
import { Cargo } from 'src/app/models/Cargo';
import { DetalleCargoService } from 'src/app/services/detalle-cargo.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';

@Component({
  selector: 'user/add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @HostBinding('class') classes = 'add_user';

  user: User = {
    COD_USUARIO: 0,
    CARNET: 0,
    NO_REGISTRO: 0,
    NOMBRE: '',
    URL_FOTO: '',
    CORREO: '',
    TELEFONO: 0,
    CLAVE: '',
    ROL: ''
  };
  
  detalle: DetalleCargo = {
    CARGO: '',
    CARRERA: '',
    FACULTAD: '',
    NOMBRE: ''
  }

  roles: Rol = {};

  cargos: Cargo = {};

  facultades: Facultad = {};

  carreras: Carrera = {};

  constructor(
    private dialogRef: MatDialogRef<UserAddComponent>, 
    private rolService: RolService, 
    private userService: UserService, 
    private cargoService: CargoService, 
    private detalleCargoService: DetalleCargoService, 
    private facultadService: FacultadService, 
    private carreraService: CarreraService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.rolService.getRols().subscribe(
      res => this.roles = res,
      err => console.error(err)      
    );
    this.cargoService.getPositions().subscribe(
      res => this.cargos = res,
      err => console.error(err)
    );
    if (!isNaN(this.data)) {
      this.userService.getUser(this.data).subscribe(
        res => {
          this.user = res[0];
          this.detalleCargoService.getDetalleCargo(this.user.NOMBRE).subscribe(
            res => this.detalle = res[0],
            err => console.error(err)
          );
        },
        err => console.error(err)
      );
    }
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    );
  }

  changeFacultad() {
    console.log('¡CAMBIO DE FACULTAD!');
    console.log(this.detalle.FACULTAD);
    this.carreraService.getCarreraByFacultad(this.detalle.FACULTAD).subscribe(
      res => {
        console.log(res);
        this.carreras = res;
      },
      err => console.error(err)
    );
  }

  save() {
    if (isNaN(this.data)) {
      // GUARDAR USUARIO
      console.log('Crear usuario');
      this.userService.saveUser(this.user).subscribe(
        res => {
          console.log(this.user);
          this.detalleCargoService.saveDetalleCargo(this.detalle).subscribe(
            res => console.log(this.detalle),
            err => console.error(err)
          );
        },
        err => console.error(err)
      );
      this.dialogRef.close();
    }
    else {
      // AGREGAR USUARIO
      console.log('Actualizar usuario');
      this.userService.updateUser(this.user).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
      this.dialogRef.close();
    }
  }
}
