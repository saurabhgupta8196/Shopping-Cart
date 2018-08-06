import { Component, OnInit } from '@angular/core';
import {GroceryAr} from '../GroceryData'
import { DataStruct } from '../DataStructure';
import {DisplayProductService} from '../display-product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  GroceryData: DataStruct[];
  constructor(private groceryService: DisplayProductService,private data:DisplayProductService, private removeData:DisplayProductService,
    private router: Router) { }

  ngOnInit() {
    this.getGrocery();
  }

   toggleBuy(Obj : DataStruct ){
   Obj.buy = !Obj.buy;
   if(Obj.buy == false){
     this.data.changeMessage(Obj);
   }
   else{
    this.removeData.Remove(Obj.id);
   }

  }
   newMessage(){
    this.router.navigate(['newCart']);
  }
  
    getGrocery(): void {
    this.groceryService.getGrocery()
        .subscribe(products => this.GroceryData = products);
  }
}
