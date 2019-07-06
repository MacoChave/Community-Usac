import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etiqueta } from '../models/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  API_URI = 'http://localhost:3000/api/tema/etiqueta';

  constructor(private http: HttpClient) { }

  getEtiquetas () {
    return this.http.get(`${this.API_URI}`);
  }

  getEtiqueta (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveEtiquetas (etiqueta: Etiqueta) {
    return this.http.post(`${this.API_URI}`, etiqueta);
  }

  updateEtiquetas (id: string, etiqueta: Etiqueta) {
    return this.http.put(`${this.API_URI}/${id}`, etiqueta);
  }

  deleteEtiquetas (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
