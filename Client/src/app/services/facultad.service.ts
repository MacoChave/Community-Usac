import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facultad } from '../models/Facultad';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  API_URI = 'http://localhost:3000/api/facultad';

  constructor(private http: HttpClient) { }

  getFacultades () {
    return this.http.get(`${this.API_URI}`);
  }

  getFacultad (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveFacultad (facultad: Facultad) {
    return this.http.post(`${this.API_URI}`, facultad);
  }

  updateFacultad (facultad: Facultad) {
    return this.http.put(`${this.API_URI}/${facultad.COD_FACULTAD}`, facultad);
  }

  deleteFacultad (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
