import { Component, OnInit } from '@angular/core';
import { EcomService } from 'src/app/services/ecom.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { longStackSupport } from 'q';
//import { ToastrService } from 'ngx-toastr';private toastr: ToastrService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heartImgPath = "./../assets/like-red.svg";
  cartImgPath = "./../assets/cart-red.svg";
  idCart = "";
  quant = 0;
  products = [];
  isConnected: boolean = false;
  pqu=0;
  constructor(private _ps: EcomService, private _us: UserService, private router: Router) { }

  ngOnInit() {
    this.pqu=Number.parseInt(localStorage.getItem("pqu"))
    if (localStorage.getItem("token")) {
      this.isConnected = true;
      this._us.getCart(localStorage.getItem("token")).subscribe((res) => {
        this.idCart = res._id;
        console.log(res._id);
        
        localStorage.removeItem('idCart');
        localStorage.setItem("idCart", res._id);
      }, (err) => {
        /* this._us.findeAndUpdate(localStorage.getItem("token"), localStorage.getItem("idCard")).subscribe((res) => {
           this.idCart = res;
           localStorage.setItem("idCart", res);
         })*/
      })
    }
    else if (localStorage.getItem("idCart")) {
      localStorage.removeItem('idCart');
      this.idCart = localStorage.getItem("idCart");
    }
    else
      this._us.createCart().subscribe((res) => {
        this.idCart = res;
        localStorage.removeItem('idCart');
        localStorage.setItem("idCart", res);
      });

    this._ps.getAllProducts().subscribe((res) => {
      this.products = res;

    }, (err) => { });
  }

  quantMoin() {
    this.quant--;
  }

  quantPlus() {
    this.quant++;
  }

  addToCart(prod) {
    console.log(prod);
    console.log(this.idCart);
    console.log(prod);



    this._us.addToCart(prod, this.idCart, this.quant.toString()).subscribe((res) => {
      //if (!localStorage.getItem("res"));
      /* for (let i = 0; i < res.products.length; i++) {
         this.shQuantite = this.shQuantite + res.products[i].quantite++;
       }*/
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
