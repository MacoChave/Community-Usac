import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { DetalleCargoService } from 'src/app/services/detalle-cargo.service';
import { DetalleCargo } from 'src/app/models/DetalleCargo';

@Component({
  selector: 'app-pick-detalle-cargo',
  templateUrl: './pick-detalle-cargo.component.html',
  styleUrls: ['./pick-detalle-cargo.component.css']
})
export class PickDetalleCargoComponent implements OnInit {

  @HostBinding('class') classes = 'pick_cargo';

  results: any = [];
  detalleCargo: any;

  constructor(
    private detalleCargoService: DetalleCargoService, 
    private dialogRef: MatDialogRef<PickDetalleCargoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.detalleCargoService.getDetalleCargo(this.data.NOMBRE).subscribe(
      res => {
        this.results = res;
        if (this.results.length == 1) {
          this.dialogRef.close(this.results[0]);
        }
      },
      err => console.error(err)
    )
  }

  onClick() {
    this.dialogRef.close(this.detalleCargo);
  }
}
