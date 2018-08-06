import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DisplayProductService }  from '../display-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  @Input() product: Product;
  constructor( private route: ActivatedRoute,
    private productService: DisplayProductService,
    private location: Location) { }
 ngOnInit(): void {
   
  }

 
}


