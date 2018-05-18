import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProduct(product){
    return this._http.post('/api/products/new', product);
  }

  getProducts(){
    return this._http.get('/api/products');
  }

  deleteProduct(product){
    return this._http.delete('/api/products/delete/'+product._id);
  }

  editProduct(product){
    return this._http.put('/api/products/update/'+product._id, product);
  }

  getProduct(product_id){
    return this._http.get('/api/products/' + product_id);
  }


}


