import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrcTema } from '../models/SrcTema';

@Injectable({
  providedIn: 'root'
})
export class SrcTemaService {

  API_URI = 'http://localhost:3000/api/tema/source';

  constructor(private http: HttpClient) { }

  getSources () {
    return this.http.get(`${this.API_URI}`);
  }

  getSource (id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveSources (source: SrcTema) {
    return this.http.post(`${this.API_URI}`, source);
  }

  updateSources (id: string, source: SrcTema) {
    return this.http.put(`${this.API_URI}/${id}`, source);
  }

  deleteSources (id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
