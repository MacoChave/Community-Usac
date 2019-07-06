import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion } from '../models/Asignacion';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  API_URI = 'http://localhost:3000/api/cargo/detalle';

  constructor(private http: HttpClient) { }

  getAsignaciones () {
    return this.http.get(`${this.API_URI}`);
  }

  getAsignacion (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveAsignacion (asignacion: Asignacion) {
    return this.http.post(`${this.API_URI}`, asignacion);
  }

  updateAsignacion (id: string, asignacion: Asignacion) {
    return this.http.put(`${this.API_URI}/${id}`, asignacion);
  }

  deleteAsignacion (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
