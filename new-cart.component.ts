import { Component, OnInit } from '@angular/core';
import {DisplayProductService} from '../display-product.service'
import { DataStruct } from '../DataStructure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cart',
  templateUrl: './new-cart.component.html',
  styleUrls: ['./new-cart.component.css']
})
export class NewCartComponent implements OnInit {

  message:any;

  constructor(private data: DisplayProductService,private removeData:DisplayProductService,private router:Router) { }

  ngOnInit() {

    this.data.MyMessage.subscribe(message => this.message = message)
    //console.log(this.message);
  }
  Removeitem(rmdata : DataStruct){
    rmdata.buy = true;
    this.removeData.Remove(rmdata.id);
  }
  goToBill()
  {
       this.router.navigate(['bill']);
  }  
}

