import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Facultad } from 'src/app/models/Facultad';
import { Carrera } from 'src/app/models/Carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'carrera/add',
  templateUrl: './carrera-add.component.html',
  styleUrls: ['./carrera-add.component.css']
})
export class CarreraAddComponent implements OnInit {

  @HostBinding('class') classes = 'add_carrera';
  
  facultades: Facultad = {};
  carrera: Carrera = {
    COD_CARRERA: 0,
    NOMBRE: '',
    DESCRIPCION: '',
    FACULTAD: ''
  }

  constructor(
    private carreraService: CarreraService, 
    private facultadService: FacultadService, 
    private dialogRef: MatDialogRef<CarreraAddComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) { }

  ngOnInit() {
    this.facultadService.getFacultades().subscribe(
      res => this.facultades = res,
      err => console.error(err)
    );
    if (!isNaN(this.data)) {
      console.log(`Editar carrera ${this.data}`);
      this.carreraService.getCarrera(this.data).subscribe(
        res => this.carrera = res[0],
        err => console.error(err)
      )
    }
  }
  
  save () {
    if (!isNaN(this.data)) {
      // ACTUALIZAR CARRERA
      console.log(this.carrera);
      this.carreraService.updateCarrera(this.carrera).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }
    else {
      // GUARDAR CARRERA
      this.carreraService.saveCarrera(this.carrera).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }

    this.dialogRef.close();
  }
}
