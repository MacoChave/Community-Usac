import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleCargo } from '../models/DetalleCargo';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class DetalleCargoService {

  constructor(private http: HttpClient) { }

  getAllDetalleCargo () {
    return this.http.get(`${Uri.DETALLE_CARGO}`);
  }

  getDetalleCargo (id: string) {
    return this.http.get(`${Uri.DETALLE_CARGO}/${id}`);
  }

  saveDetalleCargo (detalle: DetalleCargo) {
    return this.http.post(`${Uri.DETALLE_CARGO}`, detalle);
  }

  // updateDetalleCargo (id: string, detalle: DetalleCargo) {
  //   return this.http.put(`${Uri.DETALLE_CARGO}/${id}`, detalle);
  // }

  // deleteDetalleCargo (id: string) {
  //   return this.http.delete(`${Uri.DETALLE_CARGO}/${id}`);
  // }
}
