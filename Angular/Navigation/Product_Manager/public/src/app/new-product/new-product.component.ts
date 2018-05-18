import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productToAdd: any;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.productToAdd = {title: '', price: '', image_url: ''};
  }

  addProductFromService(){
    this.errors = [];
    this._httpService.addProduct(this.productToAdd).subscribe(data => {
      if (data.errors) {
        for (var error in data.errors) {
          this.errors.push(data.errors[error].message);
        }
      }
      else{
        this._router.navigate(['/products']);
      }
    })
  }

  backToProducts(){
    this._router.navigate(['/products']);
  }

}
