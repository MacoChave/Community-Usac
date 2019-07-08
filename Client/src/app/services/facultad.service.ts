import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facultad } from '../models/Facultad';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  constructor(private http: HttpClient) { }

  getFacultades () {
    return this.http.get(`${Uri.FACULTAD}`);
  }

  getFacultad (id: string) {
    return this.http.get(`${Uri.FACULTAD}/${id}`);
  }

  saveFacultad (facultad: Facultad) {
    return this.http.post(`${Uri.FACULTAD}`, facultad);
  }

  updateFacultad (facultad: Facultad) {
    return this.http.put(`${Uri.FACULTAD}/${facultad.COD_FACULTAD}`, facultad);
  }

  deleteFacultad (id: string) {
    return this.http.delete(`${Uri.FACULTAD}/${id}`);
  }
}
