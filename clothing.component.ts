import { Component, OnInit } from '@angular/core';
import {ClothingAr} from '../clothingData';
import { DataStruct } from '../DataStructure';
import {DisplayProductService} from '../display-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

ClothsData : DataStruct[];

  constructor( private clothingService : DisplayProductService,private data:DisplayProductService, private removeData:DisplayProductService,
    private router: Router) { }

  ngOnInit() {
    this.getClothing();
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



   getClothing(): void {
    this.clothingService.getClothing()
        .subscribe(products => this.ClothsData = products);
  }

  newMessage(){
    this.router.navigate(['newCart']);
  }
}


