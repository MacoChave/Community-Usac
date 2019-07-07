import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Ciencia } from 'src/app/models/Ciencia';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CienciaService } from 'src/app/services/ciencia.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-ciencia-add',
  templateUrl: './ciencia-add.component.html',
  styleUrls: ['./ciencia-add.component.css']
})
export class CienciaAddComponent implements OnInit {

  @HostBinding('class') classes = 'add_ciencia';

  ciencia: Ciencia = {
    COD_CIENCIA: 0,
    NOMBRE: '',
    DESCRIPCION: '',
    FACULTAD: '',
    CARRERA: '',
  }

  facultades: any = [];
  carreras: any = [];

  constructor(
    private dialogRef: MatDialogRef<CienciaAddComponent>, 
    private cienciaService: CienciaService, 
    private facultadService: FacultadService,
    private carreraService: CarreraService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    )
    if (!isNaN(this.data)) {
      this.cienciaService.getCiencia(this.data).subscribe(
        res => {
          this.ciencia = res[0];
          this.changeFacultad();
        },
        err => console.error(err)
      )
    }
  }

  changeFacultad () {
    this.carreraService.getCarreraByFacultad(this.ciencia.FACULTAD).subscribe(
      res => this.carreras = res,
      err => console.error(err)
    )
  }

  save() {
    if (!isNaN(this.data)) {
      // ACTUALIZAR CIENCIA
      console.log('ACTUALIZAR');
      this.cienciaService.updateCiencia(this.ciencia).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }
    else {
      // AGREGAR CIENCIA
      console.log('AGREGAR');
      this.cienciaService.saveCiencia(this.ciencia).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }

    this.dialogRef.close();
  }

}
