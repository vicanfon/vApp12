import { Injectable } from '@angular/core';

import {MessageService} from './message.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private messageService: MessageService, private router: Router) { }

  signupUser(username: string, password: string){
    // call to storage to create login and password account
    this.messageService.add('User created');
  }

  signinUser(username: string, password: string){
    // call to storage to create login and password account
    this.router.navigate(['/dashboard']);
    this.token = "abc"
  }

  getToken(){

  }

  logout(){
    this.token = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(){
    return this.token != null;
  }
}
