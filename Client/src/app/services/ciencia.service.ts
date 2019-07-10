import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciencia } from '../models/Ciencia';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class CienciaService {

  constructor(private http: HttpClient) { }

  getCiencias () {
    return this.http.get(`${Uri.CIENCIA}`);
  }

  getCiencia (id: string) {
    return this.http.get(`${Uri.CIENCIA}/${id}`);
  }

  getCienciaByCarrera (carrera: number) {
    return this.http.get(`${Uri.CIENCIA}/carrera/${carrera}`);
  }

  saveCiencia (ciencia: Ciencia) {
    return this.http.post(`${Uri.CIENCIA}`, ciencia);
  }

  updateCiencia (ciencia: Ciencia) {
    return this.http.put(`${Uri.CIENCIA}/${ciencia.COD_CIENCIA}`, ciencia);
  }

  deleteCiencia (id: string) {
    return this.http.delete(`${Uri.CIENCIA}/${id}`);
  }
}
