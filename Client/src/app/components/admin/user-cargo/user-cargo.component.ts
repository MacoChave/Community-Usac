import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { DetalleCargo } from 'src/app/models/DetalleCargo';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DetalleCargoService } from 'src/app/services/detalle-cargo.service';
import { Cargo } from 'src/app/models/Cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user_cargo',
  templateUrl: './user-cargo.component.html',
  styleUrls: ['./user-cargo.component.css']
})
export class UserCargoComponent implements OnInit {

  @HostBinding('class') classes = 'cargo_user';

  title: string = 'Usuario';

  detalles: DetalleCargo = {};

  detalle: DetalleCargo = {
    CARGO: '',
    CARRERA: '',
    FACULTAD: '',
    NOMBRE: this.data,
    COD_CARGO: 0,
    COD_CARRERA: 0,
    COD_FACULTAD: 0,
    COD_USUARIO: 0
  }

  cargos: Cargo = {};

  facultades: Facultad = {};

  carreras: Carrera = {};

  result: any;

  constructor(
    private detalleCargoService: DetalleCargoService, 
    private cargoService: CargoService, 
    private carreraService: CarreraService, 
    private facultadService: FacultadService, 
    private userService: UserService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.clearDetalleCargo();

    this.userService.getUser(this.data).subscribe(
      res => {
        this.result = res[0];
        console.log(this.result);
        this.detalle.COD_USUARIO = this.result.COD_USUARIO;
        this.loadDetalles();
      },
      err => console.error(err)
    );

    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.log(err)
    );

    this.cargoService.getPositions().subscribe(
      res => this.cargos = res,
      err => console.log(err)
    )
  }

  clearDetalleCargo () {
    this.detalle.COD_CARGO = 0;
    this.detalle.COD_CARRERA = 0;
    this.detalle.COD_FACULTAD = 0;
  }

  loadDetalles() {
    this.detalleCargoService.getDetalleCargo(this.result.NOMBRE).subscribe(
      res => {
        this.detalles = res;
        this.clearDetalleCargo();
        console.log(this.detalles);
      },
      err => console.log(err)
    );
  }

  save() {
    console.log(this.detalle);
    this.detalleCargoService.saveDetalleCargo(this.detalle).subscribe(
      res => this.loadDetalles(),
      err => console.log(err)
    );
  }

  searchCarrera() {
    this.carreraService.getCarreraByFacultad(this.detalle.COD_FACULTAD).subscribe(
      res => {
        this.carreras = res;
        console.log(this.carreras);
      },
      err => console.log(err)
    )
  }
}
