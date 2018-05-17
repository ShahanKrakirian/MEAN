import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWashington(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Washington DC.&units=imperial&APPID=bdd76ef08a839ecf31746b7ef7b197a1')
  }
  getSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID=bdd76ef08a839ecf31746b7ef7b197a1')
  }
  getSan_Jose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=San Jose&units=imperial&APPID=bdd76ef08a839ecf31746b7ef7b197a1')
  }
  getDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&APPID=bdd76ef08a839ecf31746b7ef7b197a1')
  }
  getChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&APPID=bdd76ef08a839ecf31746b7ef7b197a1')
  }
  getBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Burbank&units=imperial&APPID=bdd76ef08a839ecf31746b7ef7b197a1')
  }
}
