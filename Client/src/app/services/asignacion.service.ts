import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion } from '../models/Asignacion';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  constructor(private http: HttpClient) { }

  getAsignaciones () {
    return this.http.get(`${Uri.ASIGNACION}`);
  }

  getAsignacion (usuario: string) {
    return this.http.get(`${Uri.ASIGNACION}/${usuario}`);
  }

  saveAsignacion (asignacion: Asignacion) {
    return this.http.post(`${Uri.ASIGNACION}`, asignacion);
  }

  // updateAsignacion (id: string, asignacion: Asignacion) {
  //   return this.http.put(`${Uri.ASIGNACION}/${id}`, asignacion);
  // }

  // deleteAsignacion (id: string) {
  //   return this.http.delete(`${Uri.ASIGNACION}/${id}`);
  // }
}
