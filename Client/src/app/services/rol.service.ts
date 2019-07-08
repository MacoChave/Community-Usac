import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/Rol';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) { }

  getRols () {
    return this.http.get(`${Uri.ROL}`);
  }

  getRol (id: string) {
    return this.http.get(`${Uri.ROL}/${id}`);
  }

  saveRols (rol: Rol) {
    return this.http.post(`${Uri.ROL}`, rol);
  }

  updateRols (id: string, rol: Rol) {
    return this.http.put(`${Uri.ROL}/${id}`, rol);
  }

  deleteRols (id:string) {
    return this.http.delete(`${Uri.ROL}/${id}`);
  }
}
