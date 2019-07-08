import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cargo } from '../models/Cargo';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  getPositions () {
    return this.http.get(`${Uri.CARGO}`);
  }

  getPosition (id: string) {
    return this.http.get(`${Uri.CARGO}/${id}`);
  }

  savePosition (cargo: Cargo) {
    return this.http.post(`${Uri.CARGO}`, cargo);
  }

  updatePosition (cargo: Cargo) {
    return this.http.put(`${Uri.CARGO}/${cargo.COD_CARGO}`, cargo);
  }

  deletePosition (id: string) {
    return this.http.delete(`${Uri.CARGO}/${id}`);
  }
}
