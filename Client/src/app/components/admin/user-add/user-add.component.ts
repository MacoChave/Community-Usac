import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Position } from 'src/app/models/Position';
import { PositionService } from 'src/app/services/cargo.service';

@Component({
  selector: 'user/add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = {
    COD_USUARIO: 0,
    CARNET: 0,
    NO_REGISTRO: 0,
    NOMBRE: '',
    URL_FOTO: '',
    CORREO: '',
    TELEFONO: 0,
    CLAVE: '',
    ROL: '',
  }

  cargo: Position = {
    COD_CARGO: 0,
    CARGO: '',
    DESCRIPCION: ''
  }

  constructor(
    private positionService: PositionService, 
    private dialogRef: MatDialogRef<UserAddComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

  save() {
    if (isNaN(this.data)) {
      // GUARDAR USUARIO
      console.log('Crear usuario');
      console.log(this.user)
      this.dialogRef.close();
    }
    else {
      // AGREGAR USUARIO
      console.log('Actualizar usuario');
      console.log(this.user);
      this.dialogRef.close();
    }
  }
}
