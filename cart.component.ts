/*import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entites';
import { Item } from '../../entities/item.entites';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
 // moduleId: module.id,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit 
{

     public items:Item[] = [];
     public total:number = 0;
     constructor(
       private activatedRoute:ActivatedRoute,
       private productService:ProductService
     ) {}

     ngOnInit() 
     {
       this.activatedRoute.params.subscribe(params => 
       {
         var id = params['id'];
         if(id)
         {
           var item: Item =
            {
             product: this.productService.find(id),
             quantity: 1
           };
           if(localStorage.getItem('carts')== null)
           {
             let cart: any = [];
             cart.push(JSON.stringify(item));
             localStorage.setItem('carts',JSON.stringify(cart));
           }
           else
           {
             let cart: any = JSON.parse(localStorage.getItem('carts'));
             let index: number = -1;
             for( var i=0;i< cart.length;i++)
             {
               let item: Item = JSON.parse(cart[i]);
               if(item.product.id == id)
               {
                 index = i;
                 break;
               }
             }
               if(index == -1){
                 cart.push(JSON.stringify(item));
                 localStorage.setItem('carts',JSON.stringify(cart));
               }else{
                 let item: Item = JSON.parse(cart[index]);
                 item.quantity +=1;
                 cart[index] = JSON.stringify(item);
                 localStorage.setItem("carts",JSON.stringify(cart));
               }
             }
             this.loadCart();
           }else{
             this.loadCart();
           }
         
       });
    }


    loadCart():void{
      this.total = 0;
      this.items = [];
      let cart = JSON.parse(localStorage.getItem('carts'));
      for(var i=0;i<cart.length;i++){
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this. total+= item.product.price * item.quantity;
      }
    }

    remove(id:string):void{
      let cart: any = JSON.parse(localStorage.getItem('carts'));
      let index: number = -1;
      for(var i=0;i<cart.length;i++){
        let item: Item= JSON.parse(cart[i]);
        if(item.product.id == id){
          cart.splice(i,1);
          break;
        }
      }
      localStorage.setItem("carts",JSON.stringify(cart));
      this.loadCart();
    }

}*/
