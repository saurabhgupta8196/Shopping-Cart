import { Component, OnInit } from '@angular/core';
import {DisplayProductService} from '../display-product.service';
import { DataStruct } from '../DataStructure';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

    message:any;
    price: number =0;
     data2:any
  constructor(private data: DisplayProductService ) { }

  ngOnInit() {
       this.data.MyMessage.subscribe(message => this.message = message)
       console.log(this.message.size);
       
       //console.log(this.message);
       for(let con of Array.from(this.message.keys())){
       //console.log(con);
       this.price += this.message.get(con).price;
      // console.log(this.price);
       }
        
     
  }


}
