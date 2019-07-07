import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Facultad } from 'src/app/models/Facultad';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FacultadService } from 'src/app/services/facultad.service';

@Component({
  selector: 'facultad/add',
  templateUrl: './facultad-add.component.html',
  styleUrls: ['./facultad-add.component.css']
})
export class FacultadAddComponent implements OnInit {

  @HostBinding('class') classes = 'add_facultad';

  facultad: Facultad = {
    COD_FACULTAD: 0,
    NOMBRE: '',
    DESCRIPCION: ''
  }

  constructor(
    private dialogRef: MatDialogRef<FacultadAddComponent>, 
    private facultadService: FacultadService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (!isNaN(this.data)) {
      this.facultadService.getFacultad(this.data).subscribe(
        res => this.facultad = res[0],
        err => console.error(err)
      )
    }
  }

  save () {
    if (!isNaN(this.data)) {
      // ACTUALIZAR FACULTAD
      console.log('ACTUALIZAR FACULTAD');
      this.facultadService.updateFacultad(this.facultad).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }
    else {
      // GUARDAR FACULTAD
      console.log('GUARDAR FACULTAD');
      this.facultadService.saveFacultad(this.facultad).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }

    this.dialogRef.close();
  }

}
