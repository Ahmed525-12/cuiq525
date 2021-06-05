import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Iproduct } from './parent/shared/directives/pipes/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getusers() {
    throw new Error('Method not implemented.');
  }


  product:Iproduct[]= [
    {"id":1,
      "name":"PURIFYING FACIAL CLEANSING GEL",
      "price":112,
      "imgf":"../assets/img/cuiq purifying.png",
      "imgde":"../assets/img/ca.jpg",

"itemCount":0

    },
    {"id":2,
      "name":"WHITENING CREAM SPF 50",
      "price":160,
      "imgf":"../assets/img/cuiq whitening.jpg",
      "imgde":"../assets/img/cb.jpg",
      "itemCount":0
    },

    {"id":3,
      "name":"VANISHING ANTI BLEMISH CREAM",
      "price":135,
      "imgf":"../assets/img/cuiq vanshing.jpg",
      "imgde":"../assets/img/cd.jpg",
      "itemCount":0
    },

    {"id":4,
      "name":"HAND SPA",
      "price":199,
      "imgf":"../assets/img/chaf.JPG",
      "imgde":"../assets/img/cf.jpg",
      "itemCount":0
    },
    {"id":5,
      "name":"HAIRCARE REVOLUTION SHAMPOO300ML",
      "price":109,
      "imgf":"../assets/img/cuiq shampoo based hair.jpg",
      "imgde":"../assets/img/cg.jpg",
      "itemCount":0
    },
    {"id":6,
      "name":"INTIMATE CLEANSING FOAM 200 ML",
      "price":79,
      "imgf":"../assets/img/cuiq intimate cleansing.jpg",
      "imgde":"../assets/img/ch.jpg",
      "itemCount":0
    },
    {"id":7,
      "name":"BABY SHAMPOO & WASH 400 ML",
      "price":39,
      "imgf":"../assets/img/cuiq baby shampoo.png",
      "imgde":"../assets/img/cl.jpg",
      "itemCount":0
    }

  ];
  constructor(private http:HttpClient) { }
  getproducts(){
    return of(this.product)
   }
}
