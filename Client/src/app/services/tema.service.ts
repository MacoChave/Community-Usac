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


  getTema (id: string) {
    return this.http.get(`${Uri.TEMA}/${id}`);
  }


  saveTema (tema: Tema) {
    return this.http.post(`${Uri.TEMA}`, tema);
  }


  updateTema (id: string, tema: Tema) {
    return this.http.put(`${Uri.TEMA}/${id}`, tema);
  }

  deleteTema (id: string) {
    return this.http.delete(`${Uri.TEMA}/${id}`);
  }
}
