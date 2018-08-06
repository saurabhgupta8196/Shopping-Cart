import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { ElectronicsAr} from './ElectronicsData';
import { ClothingAr} from './ClothingData';
import { GroceryAr} from './GroceryData';
import { FootwearAr} from './FootwearData';
import {DataStruct} from './DataStructure';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayProductService {
private isUserLoggedIn=false;
private username;
  constructor() { 

    this.isUserLoggedIn=false;

  }

   setUserLoggedIn()
   {
     this.isUserLoggedIn=true;
   }

   getUserLoggedIn()
   {
     return this.isUserLoggedIn;
   }
  

  getProducts(): Observable<Product[]>{
    return of(PRODUCTS);
  }
  getElectronics(): Observable<DataStruct[]>{
    return of(ElectronicsAr);
  }
    getClothing(): Observable<DataStruct[]>{
    return of(ClothingAr);
  }
    getGrocery(): Observable<DataStruct[]>{
    return of(GroceryAr);
  }
    getFootwear(): Observable<DataStruct[]>{
    return of(FootwearAr);
  }
 

  xyz : DataStruct;
  private messageSource = new BehaviorSubject(this.xyz);
  currentMessage = this.messageSource.asObservable();


   priceListMap : Map<string, DataStruct> = new Map<string, DataStruct>();
   
   private DataSource = new BehaviorSubject(this.priceListMap);
   MyMessage = this.DataSource.asObservable();

   abc : string;
  private RemoveSource = new BehaviorSubject(this.abc);
  Rmovedata = this.RemoveSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
    this.priceListMap.set(message.id , message);
   
  }

  Remove(id: any) {
    this.messageSource.next(id);
    this.priceListMap.delete(id);
   
  }

  sendMeassage(){
    console.log("senddata");
    return this.priceListMap;
    
  }
}



