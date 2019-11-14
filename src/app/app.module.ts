import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/admin/category-update/category-update.component';
import { HomeComponent } from './components/ecom/home/home.component';
import { ConnectComponent } from './components/ecom/connect/connect.component';
import { AdminComponent } from './components/ecom/admin/admin.component';
import { SubscribeComponent } from './components/ecom/subscribe/subscribe.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { ProductUpdateComponent } from './components/seller/product-update/product-update.component';
import { HttpClientModule } from '@angular/common/http';
import { EcomService } from './services/ecom.service';
import { AdminGuard } from './guards/admin.guard';
import { AdminService } from './services/admin.service';
import { SellerService } from './services/seller.service';
import { UserService } from './services/user.service';
import { ShoppingCartComponent } from './components/ecom/shopping-cart/shopping-cart.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/ecom/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    HomeComponent,
    ConnectComponent,
    SubscribeComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ShoppingCartComponent,
    NavbarComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EcomService,
    AdminService,
    SellerService,
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
