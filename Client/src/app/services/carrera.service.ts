import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../models/Carrera';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  getCarreras () {
    return this.http.get(`${Uri.CARRERA}`);
  }

  getCarrera (id: string) {
    return this.http.get(`${Uri.CARRERA}/${id}`);
  }

  getCarreraByFacultad (facultad: number) {
    return this.http.get(`${Uri.CARRERA}/facultad/${facultad}`);
  }

  saveCarrera (carrera: Carrera) {
    return this.http.post(`${Uri.CARRERA}`, carrera);
  }

  updateCarrera (carrera: Carrera) {
    return this.http.put(`${Uri.CARRERA}/${carrera.COD_CARRERA}`, carrera);
  }

  deleteCarrera (id: string) {
    return this.http.delete(`${Uri.CARRERA}/${id}`);
  }
}
