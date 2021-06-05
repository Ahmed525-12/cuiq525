import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean;
  constructor() {
    this.isLoggedIn=localStorage.getItem('isLoggedIn')?true:false
   }
   doLogin(){
    this.isLoggedIn=true
    localStorage.setItem('isLoggedIn',String(this.isLoggedIn))
  }
  dologout(){
    this.isLoggedIn=false
    localStorage.removeItem('isLoggedIn')
  }
}
