import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  farm(){
    return this._http.get('/api/farm');
  }
  cave(){
    return this._http.get('/api/cave');
  }
  house(){
    return this._http.get('/api/house');
  }
  casino(){
    return this._http.get('/api/casino');
  }
  saveGame(gold, name){
    return this._http.get('/api/save/' + gold + '/' + name);
  }
  loadGame(game_id){
    return this._http.get('/api/load/' + game_id);
  }
  highScores(){
    return this._http.get('/api/high_scores');
  }
}
