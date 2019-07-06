import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  API_URI = 'http://localhost:3000/api/tema/comentario';

  constructor(private http: HttpClient) { }

  getComentarios () {
    return this.http.get(`${this.API_URI}`);
  }

  getComentario (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveComentario (comentario: Comentario) {
    return this.http.post(`${this.API_URI}`, comentario);
  }

  updateComentario (id: string, comentario: Comentario) {
    return this.http.put(`${this.API_URI}/${id}`, comentario);
  }

  deleteComentario (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
