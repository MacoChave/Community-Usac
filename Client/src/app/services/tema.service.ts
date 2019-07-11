import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  getTemas () {
    return this.http.get(`${Uri.TEMA}`);
  }

  getTema (id: number) {
    return this.http.get(`${Uri.TEMA}/${id}`);
  }

  saveTema (tema: Tema) {
    return this.http.post(`${Uri.TEMA}`, tema);
  }

  updateTema (id: number, tema: Tema) {
    return this.http.put(`${Uri.TEMA}/${id}`, tema);
  }

  closerTema (id: number, tema: Tema) {
    return this.http.put(`${Uri.TEMA}/close/${id}`, tema);
  }

  solverTema (id: number) {
    return this.http.delete(`${Uri.TEMA}/${id}`);
  }
}
