import { Component, OnInit, HostBinding } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @HostBinding('class') clases = 'user_container';

  result: any = [];
  
  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => this.result = res,
      err => console.error(err)
    );
  }

  deleteUser(id: string) {
    console.log('DELETE USER ' + id);
    this.userService.deleteUser(id).subscribe(
      res => alert('Usuario eliminado'),
      err => alert('No se ha podido eliminar el usuario')
    );
  }

  editUser(id: string) {
    
    const dialogRef = this.dialog.open(
      UserAddComponent, 
      {
        data: id,
        height: '90vh',
        width: '70vh'
      }
    );
  }

  addUser() {
    const dialogRef = this.dialog.open(
      UserAddComponent, 
      {
        data: {}
      }
    );
  }
}
