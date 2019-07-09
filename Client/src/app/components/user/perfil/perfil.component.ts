import { Component, OnInit, HostBinding } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @HostBinding('class') classes = 'perfil_container flex_container';

  user: User;
  
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('session'));
  }

  save() {
    this.userService.updateUser(this.user).subscribe(
      res => alert('Perfil guardado'),
      err => alert('Perfil no pudo ser guardado')
    );
  }
}
