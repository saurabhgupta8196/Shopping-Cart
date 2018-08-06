import { Component ,Output} from '@angular/core';
import {DisplayProductService} from './display-product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Shopping Cart';
  message:any;

  displayProduct(e){
    console.log(e);
  }
}
