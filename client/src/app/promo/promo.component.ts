import { Component, OnInit } from '@angular/core';
import {ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";


@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  productList
  constructor(public service: ProductService, public cartService: CartService) {
    this.service 
      .getListProduct()
      .subscribe(productList => {
        this.productList = [...productList]
         console.log(this.productList)
      });
  }
  

  ngOnInit() {
  }
  addToCart(productId){
    console.log(this.cartService.cart)
    this.cartService.cart.push(productId);
  }
}
