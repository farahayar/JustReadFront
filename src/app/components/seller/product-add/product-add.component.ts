import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SellerService } from './../../../services/seller.service'
import { Product } from './../../../models/product'
import { Router } from '@angular/router'
//import { ToastrService } from 'ngx-toastr';, private toastr: ToastrService


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  addProdForm: FormGroup;
  selectedFile: File;

  constructor(private fb: FormBuilder, private _sellerService: SellerService) {

    this.addProdForm = fb.group({

      productName: new FormControl("", [

        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),

      productDisc: new FormControl("", [

        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),

      productPrice: new FormControl("", [

        Validators.required,
      ]),

      prodDate: new FormControl("", [

        Validators.required,
      ]),

      productPic: new FormControl("", [

        Validators.required,
      ]),

      idClient: new FormControl("", [

        Validators.required,
      ])

    })

  }

  get pName() {
    return this.addProdForm.get('productName');
  }
  get pDisc() {
    return this.addProdForm.get('productDisc');
  }

  get pPic() {
    return this.addProdForm.get('productPic');
  }

 
  get pPrice() {
    return this.addProdForm.get('productPrice');
  }

  get idClient() {
    return this.addProdForm.get('idClient');
  }

  get pQtt() {
    return this.addProdForm.get('prodDate');
  }


  ngOnInit() {
  }


  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }

  addProduct() {

      const fd = new FormData();
      let data = this.addProdForm.value;
      const p = new Product(data.productName, data.productDisc, data.productPrice, data.prodDate, data.idClient);
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('product', JSON.stringify(p));
    


    this._sellerService.addProduct(fd,localStorage.getItem("token")).subscribe((res) => {
      console.log(res);

      //this.toastr.success('product added');



    }, (err) => {
      // this.toastr.error('error');

      console.log(err);
    });
  }

}