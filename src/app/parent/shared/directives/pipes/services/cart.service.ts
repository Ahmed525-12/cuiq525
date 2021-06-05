import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsCount:any=0
  cartitemsprice:any=0
    private _cartitems: Iproduct[]=[];
    set cartItems(cartItems:Iproduct[]){
      this._cartitems=cartItems
    }
    get cartItems(){
      return this._cartitems
    }
  constructor() { }
  addTocartItem(item:Iproduct){
    if (item.itemCount>0) {
      const index= this.cartItems.findIndex(i=>i.id === item.id)
      index>=0 ? this.cartItems[index]=item:this.cartItems.push(item)
      this.updatesavedItem
    } else {
      this.removeItemFromCart(item)
      this.updatesavedItem

    }
    this.UpdateCartItem()
      }

   UpdateCartItem(){
     this.cartItemsCount=0
     this.cartitemsprice=0
     this.cartItems.forEach(item=>this.cartItemsCount+=item.itemCount)
     this.cartItems.forEach(item=>this.cartitemsprice += (item.price * item.itemCount))
     this.updatesavedItem
   }
   removeItemFromCart(item:Iproduct){
    const index= this.cartItems.findIndex(i=>i.id === item.id)
    this.cartItems.splice(index,1)
    this.UpdateCartItem()
    this.updatesavedItem
  }
  updatesavedItem(){
    this.UpdateCartItem()
    localStorage.setItem('cart_items', JSON.stringify(this.cartItems))
    localStorage.setItem('cart_items_count', String(this.cartItemsCount));
  }
  reset() {
    this.cartItems = [];
    this.cartItemsCount = 0;
    this.cartitemsprice = 0;
  }
}
