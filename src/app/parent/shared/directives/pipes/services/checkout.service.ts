import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  is_checked!: boolean;
  constructor() {
    this.is_checked=localStorage.getItem('is_checked')?true:false
   }
   doLogin(){
    this.is_checked=true
    localStorage.setItem('is_checked',String(this.is_checked))
  }
  dologout(){
    this.is_checked=false
    localStorage.removeItem('is_checked')
  }
}
