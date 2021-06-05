import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/parent/shared/directives/pipes/services/cart.service';
import { CheckoutService } from 'src/app/parent/shared/directives/pipes/services/checkout.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {

  constructor(public cartservice:CartService,private productsservice:ProductsService,private checkoutservice:CheckoutService,private router:Router) { }
  loginform!:FormGroup
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [
        Validators.required,



      ]),


    });
  }
  checkout(){
    if (this.loginform.valid) {
      this.checkoutservice.doLogin()
      this.router.navigate(['/success'])
    }
      }

}
