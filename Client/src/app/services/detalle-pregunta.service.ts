import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../models/Uri';
import { DetalleRespuesta } from '../models/DetalleRespuesta';

@Injectable({
  providedIn: 'root'
})
export class DetallePreguntaService {

  constructor(private http: HttpClient) { }

  getDetallesRes () {
    return this.http.get(`${Uri.DETALLE_RESPUESTA}`);
  }

  getDetalleRes (detalle: DetalleRespuesta) {
    return this.http.post(`${Uri.DETALLE_RESPUESTA}/examen`, detalle);
  }

  saveDetalleRes (detalle: DetallePreguntaService) {
    return this.http.post(`${Uri.DETALLE_RESPUESTA}/`, detalle);
  }

  // updateDetalleRes (id: string, detalle: DetallePreguntaService) {
  //   return this.http.put(`${Uri.DETALLE_RESPUESTA}/${id}`, detalle);
  // }

  // deleteDetalleRes (id: string) {
  //   return this.http.delete(`${Uri.DETALLE_RESPUESTA}/${id}`);
  // }
}
