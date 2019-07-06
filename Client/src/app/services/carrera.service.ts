import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../models/Carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  API_URI = 'http://localhost:3000/api/carrera';

  constructor(private http: HttpClient) { }

  getCarreras () {
    return this.http.get(`${this.API_URI}`);
  }


  getCarrera (id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }


  saveCarreras (carrera: Carrera) {
    return this.http.post(`${this.API_URI}`, carrera);
  }


  updateCarreras (id: number, carrera: Carrera) {
    return this.http.put(`${this.API_URI}/${id}`, carrera);
  }


  deleteCarreras (id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
