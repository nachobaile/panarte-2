import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { environment } from "../environments/environment";

@Injectable()
export class CartService {
  public cart = [];
  BASEURL: string = environment.BASEURL;
  options: object = { withCredentials: true };
  constructor(private http: Http) {}
  createCart() {
    const productsBought = this.cart
    return this.http
      .post(
        `${this.BASEURL}/api/orders/new`,
        { productsBought },
        this.options
      )
      .map(res => res.json());
  }
}
