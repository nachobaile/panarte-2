import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productList: Array<any> = [];
 
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
