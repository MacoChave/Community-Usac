import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleRespuesta } from '../models/DetalleRespuesta';

@Injectable({
  providedIn: 'root'
})
export class DetalleRespuestaService {

  API_URI = 'http://localhost:3000/api/examen/pregunta/respuesta/detalle';

  constructor(private http: HttpClient) { }

  getDetallesRes () {
    return this.http.get(`${this.API_URI}`);
  }

  getDetalleRes (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveDetalleRes (detalle: DetalleRespuesta) {
    return this.http.post(`${this.API_URI}`, detalle);
  }

  updateDetalleRes (id: string, detalle: DetalleRespuesta) {
    return this.http.put(`${this.API_URI}/${id}`, detalle);
  }

  deleteDetalleRes (id: string, detalle: DetalleRespuesta) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
