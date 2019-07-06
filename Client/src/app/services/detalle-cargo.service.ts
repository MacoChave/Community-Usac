import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleCargo } from '../models/DetalleCargo';

@Injectable({
  providedIn: 'root'
})
export class DetalleCargoService {

  API_URI = 'http://localhost:3000/api/cargo/detalle';

  constructor(private http: HttpClient) { }

  getAllDetalleCargo () {
    return this.http.get(`${this.API_URI}`);
  }

  getDetalleCargo (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveDetalleCargo (detalle: DetalleCargo) {
    return this.http.post(`${this.API_URI}`, detalle);
  }

  updateDetalleCargo (id: string, detalle: DetalleCargo) {
    return this.http.put(`${this.API_URI}/${id}`, detalle);
  }

  deleteDetalleCargo (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
