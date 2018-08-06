import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { PRODUCTS } from '../mock-products';
import {DisplayProductService} from '../display-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  product = PRODUCTS;
 
  selectedProduct: Product;
  products: Product[];
  constructor(private productService: DisplayProductService) { }

  ngOnInit() {
     this.getProducts();
  }
  

   getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

}



