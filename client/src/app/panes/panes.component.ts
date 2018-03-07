import { Component, OnInit } from '@angular/core';
import {ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-panes',
  templateUrl: './panes.component.html',
  styleUrls: ['./panes.component.css']
})
export class PanesComponent implements OnInit {
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
