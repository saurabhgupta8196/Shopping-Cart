
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { DataStruct } from '../DataStructure';
import {ElectronicsAr} from '../ElectronicsData';
import {DisplayProductService} from '../display-product.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

ElectronicsData : DataStruct[];
  message:DataStruct;
  addcart : boolean;
  constructor(private data:DisplayProductService,
    private electronicsService :DisplayProductService,
    private removeData:DisplayProductService,
    private router: Router) { }
    
  ngOnInit() {
    this.getElectronics();
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

  getElectronics(): void {
    this.electronicsService.getElectronics()
        .subscribe(products => this.ElectronicsData = products);
  }

 

}


