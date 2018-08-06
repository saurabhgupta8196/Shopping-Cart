import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothingComponent } from './clothing/clothing.component';
import { GroceryComponent } from './grocery/grocery.component';
import { FootwearComponent } from './footwear/footwear.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewCartComponent } from './new-cart/new-cart.component';
import { BillComponent } from './bill/bill.component';
//import { CartComponent } from './cart/cart.component';
//import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    DashboardComponent,
    DemoComponent,
    ElectronicsComponent,
    ClothingComponent,
    GroceryComponent,
    FootwearComponent,
    WelcomeComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    NewCartComponent,
    BillComponent,
   // CartComponent,
   // ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





