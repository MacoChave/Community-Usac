import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User';
import { MatDialog } from '@angular/material';
import { TemaService } from 'src/app/services/tema.service';
import { AddTemaComponent } from '../add-tema/add-tema.component';
import { EtiquetaComponent } from '../etiqueta/etiqueta.component';

@Component({
  selector: 'historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  @HostBinding('class') classes = 'historia_container';

  user: User;
  result: any = [];

  constructor(
    private dialog: MatDialog, 
    private temaService: TemaService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
    this.temaService.getTema(this.user.COD_USUARIO).subscribe(
      res => this.result = res,
      err => console.error(err)
    );
  }

  addPost () {
    const dialogRef = this.dialog.open(
      AddTemaComponent, 
      {
        data: this.user,
        height: '80vh',
        width: '60vw'
      }
    );
  }

  addEtiquetaTema(COD_TEMA: number) {
    const dialogRef = this.dialog.open(
      EtiquetaComponent, 
      {
        data: COD_TEMA,
        height: '50vh',
        width: '60vh'
      }
    )
  }

  solucionTema(COD_TEMA: number) {
    this.temaService.solverTema(COD_TEMA).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}
