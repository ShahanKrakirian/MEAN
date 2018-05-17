import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  details;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSan_JoseFromService();
  }
  
  getSan_JoseFromService(){
    this._httpService.getSan_Jose().subscribe(data => {
      this.details = data;
    })
  }

}
