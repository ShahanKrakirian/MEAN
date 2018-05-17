import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  details;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBurbankFromService();
  }
  
  getBurbankFromService(){
    this._httpService.getBurbank().subscribe(data => {
      this.details = data;
    })
  }

}
