import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  API_URI = 'http://localhost:3000/api/rol';

  constructor(private http:HttpClient) { }

  getRols () {
    return this.http.get(`${this.API_URI}`);
  }

  getRol (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveRols (rol: Rol) {
    return this.http.post(`${this.API_URI}`, rol);
  }

  updateRols (id: string, rol: Rol) {
    return this.http.put(`${this.API_URI}/${id}`, rol);
  }

  deleteRols (id:string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
