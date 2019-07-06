import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoPregunta } from '../models/TipoPregunta';

@Injectable({
  providedIn: 'root'
})
export class TipoPreguntaService {

  API_URI = 'http://localhost:3000/api/examen/pregunta/tipo';

  constructor(private http: HttpClient) { }

  getTipoPreguntas () {
    return this.http.get(`${this.API_URI}`);
  }

  getTipoPregunta (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveTipoPregunta (id: string, tipo: TipoPregunta) {
    return this.http.post(`${this.API_URI}`, tipo);
  }

  updateTipoPregunta (id: string, tipo: TipoPregunta) {
    return this.http.put(`${this.API_URI}/${id}`, tipo);
  }

  deleteTipoPregunta (id: string, tipo: TipoPregunta) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
