import { Injectable } from '@angular/core';

import {MessageService} from './message.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  role: string;

  constructor(private messageService: MessageService, private router: Router) { }

  signupUser(username: string, password: string){
    // call to storage to create login and password account
    this.messageService.add('User created');
  }

  signinUser(username: string, password: string){
    // call to storage to create login and password account
    if (username === "mass" && password === "1234"){
      this.token = "abc";
      this.role = username;
      this.router.navigate(['/dashboard']);
    } else if (username === "sis" && password === "1234"){
      this.token = "abc";
      this.role = username;
      this.router.navigate(['/dashboard']);
    }else {
      this.messageService.add('User not registered');
    }
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
  getRole(){
    return this.role;
  }
}
