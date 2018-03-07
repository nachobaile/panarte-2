import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment}from "../environments/environment"



interface User {
  username:string,
  password:string
}

@Injectable()
export class ProductService {

  BASEURL:string= environment.BASEURL;
  options:object = {withCredentials:true};
  constructor(private http: Http) {}

  
   
   getListProduct(){
      return this.http.get(`${this.BASEURL}/api/products/show`)
      .map((res) => res.json());

   }

   getProduct(id) {
    return this.http.get(`${this.BASEURL}/api/products/show/${id}`)
      .map((res) => res.json());
  
}
}
