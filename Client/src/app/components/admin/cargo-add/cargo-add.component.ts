import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Cargo } from 'src/app/models/Cargo';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'cargo/add',
  templateUrl: './cargo-add.component.html',
  styleUrls: ['./cargo-add.component.css']
})
export class CargoAddComponent implements OnInit {

  @HostBinding('class') classes = 'add_cargo';
  
  cargo: Cargo = {
    COD_CARGO: 0,
    CARGO: '',
    DESCRIPCION: ''
  }

  constructor(
    private dialogRef: MatDialogRef<CargoAddComponent>, 
    private cargoService: CargoService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (!isNaN(this.data)) {
      // ACTUALIZAR CARGO
      this.cargoService.getPosition(this.data).subscribe(
        res => this.cargo = res[0],
        err => console.error(err)
      )
    }
  }

  save () {
    if (!isNaN(this.data)) {
      console.log('Actualizar');
      this.cargoService.updatePosition(this.cargo).subscribe(
        res => alert('Cargo agregado'),
        err => alert('Cargo no se pudo agregar')
      )
    }
    else {
      console.log('Guardar');
      this.cargoService.savePosition(this.cargo).subscribe(
        res => alert('Cargo actualizado'),
        err => alert('Cargo se pudo actualizar')
      )
    }

    this.dialogRef.close();
  }
}
