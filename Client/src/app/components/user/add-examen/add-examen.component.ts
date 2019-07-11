import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { Examen } from 'src/app/models/Examen';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';
import { Ciencia } from 'src/app/models/Ciencia';
import { ExamenService } from 'src/app/services/examen.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { DetallePreguntaService } from 'src/app/services/detalle-pregunta.service';
import { DetalleRespuestaService } from 'src/app/services/detalle-respuesta.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { CienciaService } from 'src/app/services/ciencia.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExamenComponent } from '../examen/examen.component';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  @HostBinding('class') classes = 'add_examen_container';

  isLinear = false;

  user: User;

  examen: Examen = {
    COD_CARRERA: 0,
    COD_CIENCIA: 0,
    COD_EXAMEN: 0,
    COD_FACULTAD: 0,
    COD_NOMBRE: 0, 
    TITULO: '',
    TEMA: '',
    DURACION: 0
  }

  facultades: Facultad = {};
  carreras: Carrera = {};
  ciencias: Ciencia = {};

  constructor(
    private examenService: ExamenService, 
    private preguntaService: PreguntaService, 
    private respuestaService: RespuestaService,
    private detallePreguntaService: DetallePreguntaService, 
    private detalleRespuestaService: DetalleRespuestaService, 
    private facultadService: FacultadService, 
    private carreraService: CarreraService, 
    private cienciaService: CienciaService, 
    private dialogRef: MatDialogRef<ExamenComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
    this.examen.COD_NOMBRE = this.user.COD_USUARIO;
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    );
  }

  changeFacultad() {
    console.log('Cambio de facultad ' + this.examen.COD_FACULTAD);
    this.carreraService.getCarreraByFacultad(this.examen.COD_FACULTAD).subscribe(
      res => this.carreras = res,
      err => console.error(err)
    )
  }

  changeCarrera() {
    console.log('Cambio de carrera ' + this.examen.COD_CARRERA);
    this.cienciaService.getCienciaByCarrera(this.examen.COD_CARRERA).subscribe(
      res => this.ciencias = res,
      err => console.error(err)
    );
  }

  saveExamen() {
    console.log(this.examen);
    this.examenService.saveExamen(this.examen).subscribe(
      res => this.examen.COD_EXAMEN = <number>res,
      err => console.error(err)
    );
  }
}
