import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta } from '../models/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  API_URI = 'http://localhost:3000/api/examen/pregunta';

  constructor(private http: HttpClient) { }

  getPreguntas () {
    return this.http.get(`${this.API_URI}`);
  }

  getPregunta (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  savePregunta (pregunta: Pregunta) {
    return this.http.post(`${this.API_URI}`, pregunta);
  }

  updatePregunta (id: string, pregunta: Pregunta) {
    return this.http.put(`${this.API_URI}/${id}`, pregunta);
  }

  deletePregunta (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
