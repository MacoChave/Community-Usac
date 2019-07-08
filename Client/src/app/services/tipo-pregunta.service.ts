import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoPregunta } from '../models/TipoPregunta';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class TipoPreguntaService {

  constructor(private http: HttpClient) { }

  getTipoPreguntas () {
    return this.http.get(`${Uri.TIPO_PREGUNTA}`);
  }

  getTipoPregunta (id: string) {
    return this.http.get(`${Uri.TIPO_PREGUNTA}/${id}`);
  }

  saveTipoPregunta (id: string, tipo: TipoPregunta) {
    return this.http.post(`${Uri.TIPO_PREGUNTA}`, tipo);
  }

  updateTipoPregunta (id: string, tipo: TipoPregunta) {
    return this.http.put(`${Uri.TIPO_PREGUNTA}/${id}`, tipo);
  }

  deleteTipoPregunta (id: string, tipo: TipoPregunta) {
    return this.http.delete(`${Uri.TIPO_PREGUNTA}/${id}`);
  }
}
