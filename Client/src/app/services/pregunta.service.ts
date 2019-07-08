import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta } from '../models/Pregunta';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http: HttpClient) { }

  getPreguntas () {
    return this.http.get(`${Uri.PREGUNTA}`);
  }

  getPregunta (id: string) {
    return this.http.get(`${Uri.PREGUNTA}/${id}`);
  }

  savePregunta (pregunta: Pregunta) {
    return this.http.post(`${Uri.PREGUNTA}`, pregunta);
  }

  updatePregunta (id: string, pregunta: Pregunta) {
    return this.http.put(`${Uri.PREGUNTA}/${id}`, pregunta);
  }

  deletePregunta (id: string) {
    return this.http.delete(`${Uri.PREGUNTA}/${id}`);
  }
}
