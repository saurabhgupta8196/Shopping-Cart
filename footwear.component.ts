import { Component, OnInit } from '@angular/core';
import { FootwearAr } from '../FootwearData'
import { DataStruct } from '../DataStructure';
import {DisplayProductService} from '../display-product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {

FootwearData :DataStruct[];
  constructor(private footwearService: DisplayProductService, private data:DisplayProductService, private removeData:DisplayProductService,
    private router: Router) { }

  ngOnInit() {
    this.getFootwear();
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


    getFootwear(): void {
    this.footwearService.getFootwear()
        .subscribe(products => this.FootwearData = products);
  }
}
