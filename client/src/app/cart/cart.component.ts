import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from "../../services/cart.service";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Array<any>;
  totalPrice: any = 0
  constructor(public service: ProductService, public cartService: CartService, public router:Router) {
    this.cart = this.cartService.cart;
  }

  ngOnInit() {
    console.log("cargo el componente cart");
    this.cart.forEach((e) => {
      console.log(e.price)
      this.totalPrice += Number(e.price)
    })
    console.log('mi to')
    console.log(this.totalPrice)
  }

  createCart() {
    const products = this.cart;
    this.cartService.createCart().subscribe(() => {
      this.router.navigate(['success'])
    });
  }
}
