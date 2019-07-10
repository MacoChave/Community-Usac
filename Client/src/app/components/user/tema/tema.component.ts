import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTemaComponent } from '../add-tema/add-tema.component';
import { User } from 'src/app/models/User';
import { TemaService } from 'src/app/services/tema.service';
import { Tema } from 'src/app/models/Tema';

@Component({
  selector: 'tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  @HostBinding('class') classes = 'tema_container';

  user: User;
  result: any = [];

  constructor(
    private dialog: MatDialog, 
    private temaService: TemaService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
    this.temaService.getTemas().subscribe(
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
}
