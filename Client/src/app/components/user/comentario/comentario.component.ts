import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Comentario } from 'src/app/models/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  comentario: Comentario = {
    COD_COMENTARIO: 0,
    COD_TEMA: 0,
    COD_USUARIO: 0
  }

  /* 
  cod_tema
  cod_usuario
   */

  result: any = [];
  result_view: any[];

  public pageSize: number = 10;
  public currentPage: number = 0;
  public lenght: number = 0;

  constructor(
    public comentarioService: ComentarioService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.comentario.COD_TEMA = this.data.COD_TEMA;
    this.comentario.COD_USUARIO = this.data.COD_USUARIO;
    console.log(this.comentario);
    this.getData();
  }

  getData() {
    this.comentarioService.getComentario(this.data.COD_TEMA).subscribe(
      res => {
        this.result = res;
        this.lenght = this.result.lenght;
        this.iterator();
      },
      err => console.error(err)
    );
  }

  iterator() {
    const start = this.currentPage * this.pageSize;
    const end = (this.currentPage + 1) * this.pageSize;
    const part = this.result.slice(start, end);
    this.result_view = part;
  }

  addComment() {
    this.comentarioService.saveComentario(this.comentario).subscribe(
      res => this.getData(),
      err => console.error(err)
    );
  }
}
