import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() cakeToShow: any;
  average = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.calcAverage();
  }

  calcAverage(){
    var sum = 0;
    var count = 0;
    for (var rating in this.cakeToShow.ratings){
      sum += this.cakeToShow.ratings[rating].stars;
      count += 1;
    }
    this.average = +((sum/count).toFixed(2));
  }
}
