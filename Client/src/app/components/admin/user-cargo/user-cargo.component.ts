import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleCargo } from 'src/app/models/DetalleCargo';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DetalleCargoService } from 'src/app/services/detalle-cargo.service';
import { Cargo } from 'src/app/models/Cargo';
import { CargoService } from 'src/app/services/cargo.service';

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
    NOMBRE: this.data
  }

  cargos: Cargo = {};

  facultades: Facultad = {};

  carreras: Carrera = {};

  constructor(
    private router: Router, 
    private detalleCargoService: DetalleCargoService, 
    private cargoService: CargoService, 
    private carreraService: CarreraService, 
    private facultadService: FacultadService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.clearDetalleCargo();

    this.loadDetalles();

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
    this.detalle.CARGO = '';
    this.detalle.CARRERA = '';
    this.detalle.FACULTAD = '';
  }

  loadDetalles() {
    this.detalleCargoService.getDetalleCargo(this.data).subscribe(
      res => {
        this.detalles = res;
        console.log(this.detalle);
      },
      err => console.log(err)
    );
  }

  save() {
    this.detalleCargoService.saveDetalleCargo(this.detalle).subscribe(
      res => {
        console.log(this.detalle)
        // this.loadDetalles();
        // this.clearDetalleCargo();
      },
      err => console.log(err)
    );
  }

  searchCarrera() {
    this.carreraService.getCarreraByFacultad(this.detalle.FACULTAD).subscribe(
      res => this.carreras = res,
      err => console.log(err)
    )
  }
}
