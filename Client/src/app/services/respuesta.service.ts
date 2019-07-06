import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  API_URI = 'http://localhost:3000/api/examen/pregunta/respuesta';

  constructor(private http: HttpClient) { }

  getRespuestas () {
    return this.http.get(`${this.API_URI}`);
  }

  getRespuest (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveRespuest (respuesta: Respuesta) {
    return this.http.post(`${this.API_URI}/`, respuesta);
  }

  updateRespuest (id: string, respuesta: Respuesta) {
    return this.http.put(`${this.API_URI}/${id}`, respuesta);
  }

  deleteRespuest (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
