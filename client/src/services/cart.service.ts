import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class CartService {
 cart = [];

  BASE_URL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
  

  }
  createCart(userId) {
    return this.http.post(`${this.BASE_URL}/api/cart/new`, {orders: this.cart, buyer: userId}, this.options)
      .map((res) => res.json());
  
}
}