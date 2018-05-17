import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  details;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWashingtonFromService();
  }

  getWashingtonFromService(){
    this._httpService.getWashington().subscribe(data => {
      this.details = data;
    })
  }

}
