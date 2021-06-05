import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/parent/shared/directives/pipes/models/product';
import { CartService } from 'src/app/parent/shared/directives/pipes/services/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public cartservice:CartService,private productsservice:ProductsService) { }

  ngOnInit(): void {
  }
  updateCartItem(op: any,item: any){

  }
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
}
