import { Component, OnInit, HostBinding } from '@angular/core';
import { CienciaService } from 'src/app/services/ciencia.service';
import { MatDialog } from '@angular/material';
import { CienciaAddComponent } from '../ciencia-add/ciencia-add.component';

@Component({
  selector: 'ciencia',
  templateUrl: './ciencia.component.html',
  styleUrls: ['./ciencia.component.css']
})
export class CienciaComponent implements OnInit {

  @HostBinding('class') classes = 'ciencia_container';

  result: any = [];

  constructor(
    private cienciaService: CienciaService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cienciaService.getCiencias().subscribe(
      res => this.result = res,
      err => console.error(err)
    )
  }

  deleteCiencia(id: string) {
    this.cienciaService.deleteCiencia(id).subscribe(
      res => alert('Ciencia eliminada'),
      err => alert('No se ha podido eliminar la ciencia')
    );
  }

  editCiencia(id: string) {
    const dialogRef = this.dialog.open(
      CienciaAddComponent, 
      {
        data: id,
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }

  addCiencia() {
    const dialogRef = this.dialog.open(
      CienciaAddComponent, 
      {
        data: {},
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }
}
