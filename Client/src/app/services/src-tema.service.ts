import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrcTema } from '../models/SrcTema';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class SrcTemaService {

  constructor(private http: HttpClient) { }

  getSources () {
    return this.http.get(`${Uri.SRC_TEMA}`);
  }

  getSource (id: string) {
    return this.http.get(`${Uri.SRC_TEMA}/${id}`);
  }

  saveSources (source: SrcTema) {
    return this.http.post(`${Uri.SRC_TEMA}`, source);
  }

  updateSources (id: string, source: SrcTema) {
    return this.http.put(`${Uri.SRC_TEMA}/${id}`, source);
  }

  deleteSources (id: string) {
    return this.http.delete(`${Uri.SRC_TEMA}/${id}`);
  }
}
