import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList:Array<any>;
  constructor(public service:ProductService ){
    this.service.getListProduct().subscribe(productList=>this.productList=productList)
   }

  ngOnInit() {
  }
  
}
