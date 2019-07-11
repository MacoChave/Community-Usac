import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { FacultadService } from 'src/app/services/facultad.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { CienciaService } from 'src/app/services/ciencia.service';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';
import { Ciencia } from 'src/app/models/Ciencia';
import { Etiqueta } from 'src/app/models/Etiqueta';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {

  @HostBinding('class') classes = 'etiqueta_container'

  facultades: Facultad = {};
  carreras: Carrera = {};
  ciencias: Ciencia = {};
  
  etiqueta: Etiqueta = {
    COD_CARRERA: 0,
    COD_CIENCIA: 0,
    COD_FACULTAD: 0, 
    COD_TEMA: 0
  }

  constructor(
    private facultadService: FacultadService, 
    private carreraService: CarreraService, 
    private cienciaService: CienciaService, 
    private etiquetaService: EtiquetaService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    )
  }

  changeFacultad() {
    this.carreraService.getCarreraByFacultad(this.etiqueta.COD_FACULTAD).subscribe(
      res => this.carreras = res,
      err => console.error(err)
    );
  }

  changeCarrera() {
    this.cienciaService.getCienciaByCarrera(this.etiqueta.COD_CARRERA).subscribe(
      res => this.ciencias = res,
      err => console.error(err)
    );
  }

  clearEtiqueta() {
    this.etiqueta.COD_CARRERA = 0;
    this.etiqueta.COD_CIENCIA = 0;
    this.etiqueta.COD_FACULTAD = 0;
  }

  addLabel() {
    console.log(this.etiqueta);
  }
}
