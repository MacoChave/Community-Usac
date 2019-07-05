import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuario',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  title = 'Dashboard Usuario';

  constructor() { }

  ngOnInit() {
  }

}
