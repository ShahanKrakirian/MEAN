import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  details;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getDallasFromService();
  }
  
  getDallasFromService(){
    this._httpService.getDallas().subscribe(data => {
      this.details = data;
    })
  }

}
