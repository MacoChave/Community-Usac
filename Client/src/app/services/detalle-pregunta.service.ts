import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetallePreguntaService {

  API_URI = 'http://localhost:3000/api/examen/pregunta/detalle';

  constructor(private http: HttpClient) { }

  getDetallesRes () {
    return this.http.get(`${this.API_URI}`);
  }

  getDetalleRes (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveDetalleRes (id: string, detalle: DetallePreguntaService) {
    return this.http.post(`${this.API_URI}/${id}`, detalle);
  }

  updateDetalleRes (id: string, detalle: DetallePreguntaService) {
    return this.http.put(`${this.API_URI}/${id}`, detalle);
  }

  deleteDetalleRes (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
