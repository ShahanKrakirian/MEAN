import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  submit_value = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  submitQuestion(){
    if (this.submit_value == 26){
      this._httpService.addCoin().// Do stuff
    }
  }

}
