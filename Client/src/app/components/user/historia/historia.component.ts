import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User';
import { MatDialog } from '@angular/material';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  @HostBinding('class') classes = 'historia_container';
  user:User;
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

}
