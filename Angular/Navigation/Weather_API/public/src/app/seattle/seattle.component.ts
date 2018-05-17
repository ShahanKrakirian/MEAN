import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  details;

  ngOnInit() {
    this.getSeattleFromService();
  }
  
  getSeattleFromService(){
    this._httpService.getSeattle().subscribe(data => {
      console.log(data);
      this.details = data;
    })
  }

}
