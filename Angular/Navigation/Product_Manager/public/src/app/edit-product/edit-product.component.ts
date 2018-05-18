import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  currentProduct;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getProduct(params['id']).subscribe(data => {
        this.currentProduct = {_id: params['id'], title: data.title, price: data.price, image_url: data.image_url};
      })
    })
  }

  editProductFromService(){
    if (this.currentProduct.title.length < 4){
      this.errors.push('Longer title, please.');
    }
    if (this.currentProduct.price.length < 1) {
      this.errors.push('Add a price.');
    }
    if (this.errors.length < 1) {
      this._httpService.editProduct(this.currentProduct).subscribe(data => {
        this._router.navigate(['/products']);
      })
    }
  }


  backToProducts(){
    this._router.navigate(['/products']);
  }



}
