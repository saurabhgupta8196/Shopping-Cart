import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent }      from './products/products.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import{ElectronicsComponent} from './electronics/electronics.component';
import{ClothingComponent} from './clothing/clothing.component';
import{GroceryComponent} from './grocery/grocery.component';
import{FootwearComponent} from './footwear/footwear.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginFormComponent} from './login-form/login-form.component'; 
//import {CartComponent} from './cart/cart.component';
import {NewCartComponent} from './new-cart/new-cart.component';
import {BillComponent} from './bill/bill.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent },
  {path :'electronics',component:ElectronicsComponent},
   {path :'clothing',component:ClothingComponent},
    {path :'grocery',component:GroceryComponent},
     {path :'footwear',component:FootwearComponent},
    {path : 'welcome' , component:WelcomeComponent },
    {path : 'login' , component:LoginFormComponent},
    {path : 'newCart' , component:NewCartComponent},
    {path :'bill' , component:BillComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }










