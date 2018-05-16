import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold = 0;
  game_id: any;
  game_messages = [];
  game_code = 0;
  top_scores = [];
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.game_id = {id: "", name: ""};
    this.topScoresFromService();
  }

  farmFromService(){
    this._httpService.farm().subscribe(data => {
      this.game_messages.unshift(data.message)
      this.gold += data.value;
    })
  }

  caveFromService(){
    this._httpService.cave().subscribe(data => {
      this.game_messages.unshift(data.message)
      this.gold += data.value;
    })
  }

  houseFromService(){
    this._httpService.house().subscribe(data => {
      this.game_messages.unshift(data.message)
      this.gold += data.value;
    })
  }

  casinoFromService(){
    this._httpService.casino().subscribe(data => {
      this.game_messages.unshift(data.message)
      this.gold += data.value;
    })
  }

  saveGameFromService(){

    this._httpService.saveGame(this.gold, this.game_id.name).subscribe(data => {
      this.game_code = data.game_code;
    })
  }

  loadGameFromService(){
    this._httpService.loadGame(this.game_id.id).subscribe(data => {
      console.log(data);
      this.gold = data.score;
    })
  }

  topScoresFromService(){
    this._httpService.highScores().subscribe(data => {
      for (var x=0; x<5; x++){
        this.top_scores.push(data[x]);
      }
    })
  }
}
