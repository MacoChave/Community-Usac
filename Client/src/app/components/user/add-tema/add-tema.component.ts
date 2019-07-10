import { Component, OnInit, Inject, HostBinding } from '@angular/core';
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

  @HostBinding('class') classes = 'historia_container';

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
    URL_IMAGEN: '',
    COD_TEMA: 0
  }
  label: Etiqueta = {
    TEMA: '',
    FACULTAD: '',
    CARRERA: '',
    CIENCIA: ''
  }

  cod_tema: any;

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
    this.tema.COD_USUARIO = this.user.COD_USUARIO;
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    )
  }

  changeFacultad() {
    this.carreraService.getCarreraByFacultad(this.label.COD_FACULTAD).subscribe(
      res => this.carreras = res,
      err => console.error(err)
    )
  }

  changeCarrera() {
    this.cienciaService.getCienciaByCarrera(this.label.COD_CARRERA).subscribe(
      res => this.ciencias = res,
      err => console.error(err)
    );
  }

  saveTema() {
    this.temaService.saveTema(this.tema).subscribe(
      res => {
        this.cod_tema = res;
        this.tema.COD_TEMA = this.cod_tema;
        this.source.COD_TEMA = this.cod_tema;
        this.label.COD_TEMA = this.cod_tema;
      },
      err => console.error(err)
    );
  }

  addSource() {
    this.sourceService.saveSources(this.source).subscribe(
      res => {
        this.clearSource();
      },
      err => console.error(err)
    );
    console.log(this.source);
  }

  addLabel() {
    this.labelService.saveEtiquetas(this.label).subscribe(
      res => {
        this.clearLabel();
      },
      err => console.error(err)
    );
    console.log(this.label);
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
