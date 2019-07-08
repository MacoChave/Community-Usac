import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers () {
    return this.http.get(`${Uri.USUARIO}`);
  }

  getUser (id: string) {
    return this.http.get(`${Uri.USUARIO}/${id}`);
  }
  
  validateUser (user: User) {
    return this.http.post(`${Uri.USUARIO}/login`, user);
  }
  saveUser (user: User) {
    return this.http.post(`${Uri.USUARIO}`, user);
  }

  updateUser (user: User) {
    return this.http.put(`${Uri.USUARIO}/${user.COD_USUARIO}`, user);
  }

  deleteUser (id: string) {
    return this.http.delete(`${Uri.USUARIO}/${id}`);
  }
}
