import { Component, OnInit } from '@angular/core';
import { EcomService } from 'src/app/services/ecom.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { longStackSupport } from 'q';
//import { ToastrService } from 'ngx-toastr';private toastr: ToastrService

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  heartImgPath = "./../assets/like-red.svg";
  cartImgPath = "./../assets/cart-black.svg";
  idCart = "";
  quant = 0;
  products = [];
  pqu= 0;
  isConnected: boolean = false;
  constructor(private _ps: EcomService, private _us: UserService,private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("token")) 
      this.isConnected = true;

    this._us.getAllProductsUser(localStorage.getItem("idCart")).subscribe((res) => {
      console.log("res"+res);
      res.forEach(element => {
        this.pqu+=Number.parseInt(element.quantite);
        localStorage.setItem("pqu",this.pqu.toString());
      });
      
      this.products = res;

    }, (err) => { });
  }

  quantMoin() {
    this.quant--;
  }

  quantPlus() {
    this.quant++;
  }

  remove(prodb) {




    this._us.removeProd(prodb.prod, localStorage.getItem("idCart"), prodb.quantite,prodb._id).subscribe((res) => {
     this.ngOnInit();
    }, (err) => {

    })
  }

  home() {
    this.router.navigateByUrl('/Home');
    // this.isLogged=false;

  }

  shoppingCart() {
    this.router.navigateByUrl('/ShoppingCart');
    // this.isLogged=false;

  }

  ajouterProd() {
    this.router.navigateByUrl('/ProductAdd');
    // this.isLogged=false;

  }

}
