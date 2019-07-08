import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../models/Chat';
import { Uri } from '../models/Uri';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getChats () {
    return this.http.get(`${Uri.CHAT}`);
  }

  getChat (chat: Chat) {
    return this.http.post(`${Uri.CHAT}/one`, chat);
  }

  saveChats (chat: Chat) {
    return this.http.post(`${Uri.CHAT}`, chat);
  }

  // updateChat (id: string, chat: Chat) {
  //   return this.http.put(`${Uri.CHAT}/${id}`, chat);
  // }

  // deleteChat (chat: Chat) {
  //   return this.http.delete(`${Uri.CHAT}`, chat);
  // }
}
