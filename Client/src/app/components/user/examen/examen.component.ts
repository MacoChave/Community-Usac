import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { User } from 'src/app/models/User';
import { AddExamenComponent } from '../add-examen/add-examen.component';
import { ExamenService } from 'src/app/services/examen.service';
import { Examen } from 'src/app/models/Examen';
@Component({
  selector: 'examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  @HostBinding('class') classes = 'examen_container';

  user: User;
  examen: Examen = {
    SALA: ''
  };

  constructor(
    private dialog: MatDialog, 
    private examenService: ExamenService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
  }

  addExamen() {
    this.dialog.open(
      AddExamenComponent, 
      {
        data: this.user,
        width: '70vw',
        height: '90vh'
      }
    );
  }

  launchExamen(id: string) {
    this.examenService.launchExamen(id, this.examen)
  }

}
