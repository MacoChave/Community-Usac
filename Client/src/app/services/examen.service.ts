import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../models/Examen';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  getExamenes () {
    return this.http.get(`${Uri.EXAMEN}`);
  }

  getExamen (id: number) {
    return this.http.get(`${Uri.EXAMEN}/${id}`);
  }

  saveExamen (examen: Examen) {
    return this.http.post(`${Uri.EXAMEN}`, examen);
  }

  updateExamen (id: string, examen: Examen) {
    return this.http.put(`${Uri.EXAMEN}/edit/${id}`, examen);
  }

  launchExamen (id: string, examen: Examen) {
    return this.http.put(`${Uri.EXAMEN}/edit/${id}`, examen);
  }

  deleteExamen (id: string) {
    return this.http.delete(`${Uri.EXAMEN}/${id}`);
  }
}
