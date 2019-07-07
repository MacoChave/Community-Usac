import { Component, OnInit, HostBinding } from '@angular/core';
import { CarreraService } from 'src/app/services/carrera.service';
import { MatDialog } from '@angular/material';
import { CarreraAddComponent } from '../carrera-add/carrera-add.component';

@Component({
  selector: 'carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  @HostBinding('class') classes = 'carrera_container';

  result: any = [];

  constructor(
    private carreraService: CarreraService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.carreraService.getCarreras().subscribe(
      res => this.result = res,
      err => console.error(err)
    );
  }

  deleteCarrera (id: string) {
    console.log(`DELETE CARRERA ${id}`);
    this.carreraService.deleteCarrera(id).subscribe(
      res => alert('Carrera eliminada'),
      err => alert('No se ha podido eliminar la carrera')
    );
  }

  editCarrera (id: string) {
    const dialogRef = this.dialog.open(
      CarreraAddComponent,
      {
        data: id,
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    )
  }

  addCarrera (id: string) {
    const dialogRef = this.dialog.open(
      CarreraAddComponent,
      {
        data: {},
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    )
  }
}
