import { Component, OnInit, Inject } from '@angular/core';
import { Tema } from 'src/app/models/Tema';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SrcTema } from 'src/app/models/SrcTema';
import { Etiqueta } from 'src/app/models/Etiqueta';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';
import { TemaService } from 'src/app/services/tema.service';
import { SrcTemaService } from 'src/app/services/src-tema.service';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { Ciencia } from 'src/app/models/Ciencia';
import { CienciaService } from 'src/app/services/ciencia.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'add-tema',
  templateUrl: './add-tema.component.html',
  styleUrls: ['./add-tema.component.css']
})
export class AddTemaComponent implements OnInit {

  isLinear = false;

  user: User;

  tema: Tema = {
    COD_TEMA: 0,
    TITULO: '',
    USUARIO: '',
    DESCRIPCION: ''
  }
  source: SrcTema = {
    TITULO: '',
    COD_SRC_TEMA: 0,
    TAG: '',
    URL_IMAGEN: ''
  }
  label: Etiqueta = {
    TEMA: '',
    FACULTAD: '',
    CARRERA: '',
    CIENCIA: ''
  }

  facultades: Facultad = {};
  carreras: Carrera = {};
  ciencias: Ciencia = {};

  constructor(
    private temaService: TemaService, 
    private sourceService: SrcTemaService, 
    private labelService: EtiquetaService, 
    private facultadService: FacultadService, 
    private carreraService: CarreraService, 
    private cienciaService: CienciaService, 
    private dialogRef: MatDialogRef<AddTemaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.user = this.data;
    this.tema.USUARIO = this.user.NOMBRE;
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    )
  }

  changeFacultad() {
    this.carreraService.getCarreraByFacultad(this.label.FACULTAD).subscribe(
      res => this.carreras = res,
      err => console.error(err)
    )
  }

  changeCarrera() {
    this.cienciaService.getCienciaByCarrera(this.label.CARRERA).subscribe(
      res => this.ciencias = res,
      err => console.error(err)
    );
  }

  saveTema() {
    this.temaService.saveTema(this.tema).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

  addSource() {
    this.sourceService.saveSources(this.source).subscribe(
      res => {
        console.log(res);
        this.clearSource();
      },
      err => console.error(err)
    );
  }

  addLabel() {
    this.labelService.saveEtiquetas(this.label).subscribe(
      res => {
        console.log(res);
        this.clearLabel();
      },
      err => console.error(err)
    );
  }

  end () {
    this.dialogRef.close();
  }

  clearSource() {    
    this.source.COD_SRC_TEMA = 0;
    this.source.TAG = '';
    this.source.URL_IMAGEN = '';
  }

  clearLabel() {
    this.label.FACULTAD = '';
    this.label.CARRERA = '';
    this.label.CIENCIA = '';
  }
}
