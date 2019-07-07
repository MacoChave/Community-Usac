import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../models/Cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  API_URI = 'http://localhost:3000/api/cargo';

  constructor(private http: HttpClient) { }

  getPositions () {
    return this.http.get(`${this.API_URI}`);
  }

  getPosition (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  savePosition (cargo: Cargo) {
    return this.http.post(`${this.API_URI}`, cargo);
  }

  updatePosition (cargo: Cargo) {
    return this.http.put(`${this.API_URI}/${cargo.COD_CARGO}`, cargo);
  }

  deletePosition (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
