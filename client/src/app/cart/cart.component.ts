import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import {ProductService } from "../../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: Array<any>
  constructor(public service: ProductService, public cartService: CartService) {
   this.cart = this.cartService.cart
      };

  ngOnInit() {
    console.log('cargo el componente cart')
    console.log( this.cartService.cart );
    
    
    console.log(this.cart)
  }

  createCart(){
    const products = this.cart
    this.cartService.cart=this.cart
  }
  }




