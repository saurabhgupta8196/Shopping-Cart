import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DisplayProductService } from '../display-product.service';
import { Router } from '@angular/router';
import{DemoComponent} from '../demo/demo.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: DisplayProductService, private router: Router) { }

  ngOnInit() {
      this.getProducts();
  }

 getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(0, 4));
  }

  

   goSearch(dis) {
    
    this.router.navigate([dis]); 
 
  }
}



