import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from '../models/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {

  API_URI = 'http://localhost:3000/api/rol';

  constructor(private http: HttpClient) { }

  getPositions () {
    return this.http.get(`${this.API_URI}`);
  }

  getPosition (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  savePosition (position: Position) {
    return this.http.post(`${this.API_URI}`, position);
  }

  updatePosition (id: string, position: Position) {
    return this.http.put(`${this.API_URI}/${id}`, position);
  }

  deletePosition (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
