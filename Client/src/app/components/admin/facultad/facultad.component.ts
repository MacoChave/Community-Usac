import { Component, OnInit, HostBinding } from '@angular/core';
import { FacultadService } from 'src/app/services/facultad.service';
import { MatDialog } from '@angular/material';
import { FacultadAddComponent } from '../facultad-add/facultad-add.component';

@Component({
  selector: 'facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {

  @HostBinding('class') classes = 'facultad_container';

  result: any = [];

  constructor(
    private facultadService: FacultadService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.facultadService.getFacultades().subscribe(
      res => this.result = res,
      err => console.error(err)
    );
  }

  deleteFacultad (id: string) {
    console.log(`DELETE FACULTAD ${id}`);
    this.facultadService.deleteFacultad(id).subscribe(
      res => alert('Facultad eliminada'),
      err => alert('No se ha podido eliminar la facultad')
    );
  }

  editFacultad (id: string) {
    const dialogRef = this.dialog.open(
      FacultadAddComponent,
      {
        data: id,
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }

  addFacultad () {
    const dialogRef = this.dialog.open(
      FacultadAddComponent,
      {
        data: {},
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }
}
