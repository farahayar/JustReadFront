import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //http fiha tt les fonction prghedif illy ykhaliwna namlou communication m3a wev service
  private userInscriptionUrl = "http://localhost:3000/user/inscription";
  private userConnectionUrl = "http://localhost:3000/user/connection";
  private getUsersUrl = "http://localhost:3000/user/getAllUser";
  private activateUrl = "http://localhost:3000/user/acitvate/";
  private _getOrCreateCart = "http://localhost:3000/product/getOrCreateCart";
  private _createCart = "http://localhost:3000/cart/createCart";
  private _getCart = "http://localhost:3000/cart/getCart";
  private _findeAndUpdate = "http://localhost:3000/cart/findeAndUpdate";
  private _addToCart = "http://localhost:3000/cart/addToCart";
  private _createCartUser = "http://localhost:3000/cart/createCartUser";
  private _getAllProductsUser = "http://localhost:3000/cart/getAllProductsUser";
  private _removeProd = "http://localhost:3000/cart/removeProd";


  constructor(private http: HttpClient) { }
  removeProd(prod: Product, idCart: String, quantite: String,idprod:String) {
    return this.http.post<any>(this._removeProd, { prod, idCart, quantite ,idprod});

  }


  getAllProductsUser(idCart: String) {
    return this.http.post<any>(this._getAllProductsUser, { idCart });

  }

  createCartUser(idUser: String) {
    return this.http.post<any>(this._createCartUser, { idUser });
  }

  addToCart(prod: Product, idCart: String, quantite: String) {
    return this.http.post<any>(this._addToCart, { prod, idCart, quantite });
  }

  findeAndUpdate(token: String, idCart: String) {
    return this.http.post<any>(this._findeAndUpdate, { token, idCart });
  }

  getCart(token: String) {
    return this.http.post<any>(this._getCart, { token });
  }

  createCart() {
    return this.http.get<any>(this._createCart);
  }

  userIncription(user: User) {
    return this.http.post<any>(this.userInscriptionUrl, user);
  }


  userConnection(user: User) {
    return this.http.post<any>(this.userConnectionUrl, user);
  }

  getUsers() {
    return this.http.get<any>(this.getUsersUrl);

  }

  activateUser(id: string) {
    return this.http.put<any>(this.activateUrl + id, id);

  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedUser() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log(decodedLogin);


    if (token) {

      if (decodedLogin.statut === "user") {
        return true;
      }

    }
    return false
  }

  isLoggedAdmin() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log(decodedLogin);



    if (token) {

      if (decodedLogin.statut === "admin") {
        return true;
      }

    }
    return false
  }

  getOrCreateCart(prod: Product, id: string, quantite: string) {
    return this.http.post<any>(this._getOrCreateCart, { prod: prod, quantite: quantite, id: id });
  }

}
