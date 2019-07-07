import { Component, OnInit, HostBinding } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { MatDialog } from '@angular/material';
import { CargoAddComponent } from '../cargo-add/cargo-add.component';

@Component({
  selector: 'cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  @HostBinding('class') classes = 'cargo_container';

  result: any = [];
  constructor(
    private cargoService: CargoService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cargoService.getPositions().subscribe(
      res => this.result = res,
      err => console.error(err)
    )
  }
  
  deleteCargo (id: string) {
    this.cargoService.deletePosition(id).subscribe(
      res => alert('Cargo eliminado'),
      err => alert('No se ha podido eliminar el cargo')
    )
  }

  editCargo (id: string) {
    const dialogRef = this.dialog.open(
      CargoAddComponent, 
      {
        data: id,
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }

  addCargo () {
    const dialogRef = this.dialog.open(
      CargoAddComponent, 
      {
        data: {},
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }
}
