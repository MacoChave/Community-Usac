import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../models/Examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  API_URI = 'http://localhost:3000/api/examen';

  constructor(private http: HttpClient) { }

  getExamenes () {
    return this.http.get(`${this.API_URI}`);
  }

  getExamen (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveExamen (examen: Examen) {
    return this.http.post(`${this.API_URI}`, examen);
  }

  updateExamen (id: string, examen: Examen) {
    return this.http.put(`${this.API_URI}/${id}`, examen);
  }

  deleteExamen (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
