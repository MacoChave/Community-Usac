import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTemaComponent } from '../add-tema/add-tema.component';
import { User } from 'src/app/models/User';

@Component({
  selector: 'tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  user: User;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
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
