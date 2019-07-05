import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @HostBinding('class') clases = 'grid_container';
  
  constructor() { }

  ngOnInit() {
  }

}
