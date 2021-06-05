import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/parent/shared/directives/pipes/models/product';
import { AuthService } from 'src/app/parent/shared/directives/pipes/services/auth.service';
import { CartService } from 'src/app/parent/shared/directives/pipes/services/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  item!:Iproduct
  constructor(public authservice:AuthService ,private router:Router,private _router:Router, public cartservice:CartService ,private productsservice:ProductsService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authservice.dologout()
    this.router.navigate(['/login'])
    localStorage.removeItem("cart")
    localStorage.removeItem("pocart")
    localStorage.removeItem("priceprod")
  }
  img="../assets/img/logo.png"

  updatecartitem(op:any,item:Iproduct){
switch (op) {
  case '-':
    item.itemCount--;

    break;
case'+':
item.itemCount++;
break;
}
this.productsservice.product.find((p:any)=>p.id === item.id? (p.itemCount=item.itemCount):null)
this.cartservice.addTocartItem(item)

}

header_varibale=false
textc=false

@HostListener("document:scroll")
scrollfun(){
  if (document.documentElement.scrollTop > 0) {
    this.header_varibale=true
    this.textc=true
  } else {
    this.header_varibale=false

    this.textc=false
  }
}
opened=false
togglesidebar(){
  this.opened=!this.opened
}
}
