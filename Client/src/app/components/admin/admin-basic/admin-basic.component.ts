import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-basic',
  templateUrl: './admin-basic.component.html',
  styleUrls: ['./admin-basic.component.css']
})
export class AdminBasicComponent implements OnInit {

  @Input() title: string = 'Usuario';

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
