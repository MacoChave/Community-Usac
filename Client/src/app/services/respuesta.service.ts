import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/Respuesta';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient) { }

  getRespuestas () {
    return this.http.get(`${Uri.RESPUESTA}`);
  }

  getRespuest (id: string) {
    return this.http.get(`${Uri.RESPUESTA}/${id}`);
  }

  saveRespuest (respuesta: Respuesta) {
    return this.http.post(`${Uri.RESPUESTA}/`, respuesta);
  }

  updateRespuest (id: string, respuesta: Respuesta) {
    return this.http.put(`${Uri.RESPUESTA}/${id}`, respuesta);
  }

  deleteRespuest (id: string) {
    return this.http.delete(`${Uri.RESPUESTA}/${id}`);
  }
}
