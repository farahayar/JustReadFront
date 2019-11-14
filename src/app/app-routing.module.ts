import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/ecom/home/home.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { ConnectComponent } from './components/ecom/connect/connect.component';
import { SubscribeComponent } from './components/ecom/subscribe/subscribe.component';
import { NavbarComponent } from './components/ecom/navbar/navbar.component';
import { ShoppingCartComponent } from './components/ecom/shopping-cart/shopping-cart.component';
import { AdminComponent } from './components/ecom/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: "Home",
    pathMatch: "full"
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: "Home",
        component: HomeComponent
      },
      {
        path: "ProductAdd",
        component: ProductAddComponent,
        canActivate:[UserGuard]
      },
      {
        path: "Connection",
        component: ConnectComponent
      }
      ,
      {
        path: "Subscribe",
        component: SubscribeComponent
      },
      {
        path: "ShoppingCart",
        component: ShoppingCartComponent
      },
      {
        path: "admin",
        component: AdminComponent,
        canActivate:[AdminGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
