import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class EcomService {
  
  private _productAjout = "http://localhost:3000/product/productAjout";
  private _getAllProducts = "http://localhost:3000/product/getAllProducts";
  
  constructor(private http: HttpClient) { }

 

  getAllProducts() {
    return this.http.get<any>(this._getAllProducts);

  }
  
  productAjout(product:Product) {
    return this.http.post<any>(this._productAjout,product);

  }
}
