import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etiqueta } from '../models/Etiqueta';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private http: HttpClient) { }

  getEtiquetas () {
    return this.http.get(`${Uri.ETIQUETA}`);
  }

  getEtiqueta (tema: string) {
    return this.http.get(`${Uri.ETIQUETA}/${tema}`);
  }

  saveEtiquetas (etiqueta: Etiqueta) {
    return this.http.post(`${Uri.ETIQUETA}`, etiqueta);
  }

  // updateEtiquetas (id: string, etiqueta: Etiqueta) {
  //   return this.http.put(`${Uri.ETIQUETA}/${id}`, etiqueta);
  // }

  // deleteEtiquetas (id: string) {
  //   return this.http.delete(`${Uri.ETIQUETA}/${id}`);
  // }
}
