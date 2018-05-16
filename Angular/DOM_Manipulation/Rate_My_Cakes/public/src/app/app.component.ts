import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ShowComponent } from './show/show.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCake: any;
  allCakes = [];
  cakeRating: any;
  showingCake;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newCake = {baker: "", image: ""};
    this.cakeRating = {stars: 5, comment: ""};
    this.getAllCakesFromService();
  }

  newCakeFromService(){
    this._httpService.newCake(this.newCake).subscribe(data => {
      this.getAllCakesFromService();
    })
  }

  getAllCakesFromService(){
    this.allCakes = [];
    this._httpService.getAllCakes().subscribe(data => {
      for (var item in data){
        this.allCakes.unshift(data[item]);
      }
    })
  }

  addReviewFromService(cake_id){
    this._httpService.addReview(cake_id, this.cakeRating).subscribe(data => {
      console.log(data);
    })
  }
  
  showCake(cake){
    this.showingCake = cake;
  }


}
