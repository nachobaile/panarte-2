import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment}from "../environments/environment"

const  BASEURL:string= environment.BASEURL;

interface User {
  username:string,
  password:string
}

@Injectable()
export class ProductService {

  BASE_URL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {}

  
   
   getListProduct(){
      return this.http.get(`${this.BASE_URL}/api/products/show`)
      .map((res) => res.json());

   }

   getProduct(id) {
    return this.http.get(`${this.BASE_URL}/api/products/show/${id}`)
      .map((res) => res.json());
  
}
}
