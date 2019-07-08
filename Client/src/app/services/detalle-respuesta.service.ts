import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleRespuesta } from '../models/DetalleRespuesta';
import { Uri } from '../models/Uri';
import { Respuesta } from '../models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class DetalleRespuestaService {

  constructor(private http: HttpClient) { }

  getDetallesRes () {
    return this.http.get(`${Uri.DETALLE_RESPUESTA}`);
  }

  getDetalleRes (respuesta: Respuesta) {
    return this.http.post(`${Uri.DETALLE_RESPUESTA}/pregunta`, respuesta);
  }

  saveDetalleRes (detalle: DetalleRespuesta) {
    return this.http.post(`${Uri.DETALLE_RESPUESTA}`, detalle);
  }

  // updateDetalleRes (id: string, detalle: DetalleRespuesta) {
  //   return this.http.put(`${Uri.DETALLE_RESPUESTA}/${id}`, detalle);
  // }

  // deleteDetalleRes (id: string, detalle: DetalleRespuesta) {
  //   return this.http.delete(`${Uri.DETALLE_RESPUESTA}/${id}`);
  // }
}
