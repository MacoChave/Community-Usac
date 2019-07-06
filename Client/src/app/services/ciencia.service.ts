import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciencia } from '../models/Ciencia';

@Injectable({
  providedIn: 'root'
})
export class CienciaService {

  API_URI = 'http://localhost:3000/api/ciencia';

  constructor(private http: HttpClient) { }

  getCiencias () {
    return this.http.get(`${this.API_URI}`);
  }

  getCiencia (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveCiencia (ciencia: Ciencia) {
    return this.http.post(`${this.API_URI}`, ciencia);
  }

  updateCiencia (id: string, ciencia: Ciencia) {
    return this.http.put(`${this.API_URI}/${id}`, ciencia);
  }

  deleteCiencia (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
