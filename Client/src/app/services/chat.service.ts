import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  API_URI = 'http://localhost:3000/api/chat';

  constructor(private http: HttpClient) { }

  getChats () {
    return this.http.get(`${this.API_URI}`);
  }

  getChat (id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveChats (chat: Chat) {
    return this.http.post(`${this.API_URI}`, chat);
  }

  updateChat (id: number, chat: Chat) {
    return this.http.put(`${this.API_URI}/${id}`, chat);
  }

  deleteChat (id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
