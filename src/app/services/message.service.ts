import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    setInterval(()=> {this.messages = []},3000);
  }

  clear(): void {
    this.messages = [];
  }
}
