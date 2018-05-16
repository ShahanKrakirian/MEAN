import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  newCake(cake){
    return this._http.post('/api/cakes/new', cake);
  }

  getAllCakes(){
    return this._http.get('/api/cakes');
  }

  addReview(cake_id, rating){
    console.log(cake_id, rating);
    return this._http.post('/api/cakes/add_review/'+cake_id, rating);
  }

}
