import { Component, OnInit } from '@angular/core';
import {ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";


@Component({
  selector: 'app-patty',
  templateUrl: './patty.component.html',
  styleUrls: ['./patty.component.css']
})
export class PattyComponent implements OnInit {
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
    this.cartService.cart.push(productId);
  }
}
