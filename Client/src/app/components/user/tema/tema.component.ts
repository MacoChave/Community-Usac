import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTemaComponent } from '../add-tema/add-tema.component';

@Component({
  selector: 'tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addPost () {
    const dialogRef = this.dialog.open(
      AddTemaComponent, 
      {
        data: {},
        maxHeight: '90vh',
        minWidth: '80vw'
      }
    );
  }
}
