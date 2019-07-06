import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  API_URI = 'http://localhost:3000/api/tema';

  constructor(private http: HttpClient) { }

  getTemas () {
    return this.http.get(`${this.API_URI}`);
  }


  getTema (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }


  saveTema (tema: Tema) {
    return this.http.post(`${this.API_URI}`, tema);
  }


  updateTema (id: string, tema: Tema) {
    return this.http.put(`${this.API_URI}/${id}`, tema);
  }

  deleteTema (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
