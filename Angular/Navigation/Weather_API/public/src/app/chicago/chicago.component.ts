import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  details;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicagoFromService();
  }
  
  getChicagoFromService(){
    this._httpService.getChicago().subscribe(data => {
      this.details = data;
    })
  }

}
