import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  API_URI = 'http://localhost:3000/api/usuario';

  constructor(private http: HttpClient) { }

  getUsers () {
    return this.http.get(`${this.API_URI}`);
  }

  getUser (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }
  
  validateUser (user: User) {
    return this.http.post(`${this.API_URI}/login`, user);
  }
  saveUser (user: User) {
    return this.http.post(`${this.API_URI}`, user);
  }

  updateUser (user: User, id:string) {
    return this.http.put(`${this.API_URI}/${id}`, user);
  }

  deleteUser (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
