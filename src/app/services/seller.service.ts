import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private _addProduct = "http://localhost:3000/product/addProduct/";

  constructor(private http: HttpClient) { }

  addProduct(product:FormData,token) {
    return this.http.put<any>(this._addProduct+token,product);

  }
}
