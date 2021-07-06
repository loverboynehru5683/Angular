import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

    filteredString:any="";  
    sortby:any='1'
    products:any;
    errMsg:any;
    constructor(proService:ProductService){
    proService.getallproducts().subscribe(
    result => this.products = result,
    error => this.errMsg = error
    )
  }
}