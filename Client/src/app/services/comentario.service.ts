import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/Comentario';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  getComentarios () {
    return this.http.get(`${Uri.COMENTARIO}`);
  }

  getComentario (id: number) {
    return this.http.get(`${Uri.COMENTARIO}/${id}`);
  }

  saveComentario (comentario: Comentario) {
    return this.http.post(`${Uri.COMENTARIO}`, comentario);
  }

  updateComentario (id: string, comentario: Comentario) {
    return this.http.put(`${Uri.COMENTARIO}/${id}`, comentario);
  }

  deleteComentario (id: string) {
    return this.http.delete(`${Uri.COMENTARIO}/${id}`);
  }
}
