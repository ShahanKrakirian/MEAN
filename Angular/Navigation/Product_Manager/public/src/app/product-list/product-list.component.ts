import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    this.allProducts = [];
    this._httpService.getProducts().subscribe(data => {
      for (var product in data){
        this.allProducts.push(data[product]);
      }
    })
  }

  deleteProductFromService(product){
    console.log(product);
    this._httpService.deleteProduct(product).subscribe(data => {
      this.getProductsFromService()
    })
  }

}
