import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTask();

    }

    getTasks(){
      let tempObservable = this._http.get('/index')
      tempObservable.subscribe(data => console.log("Got our tasks!", data));
    }
    getTask(){
      let tempObservable = this._http.get('tasks/5af5df0a1a849f2c241199a8')
      tempObservable.subscribe(data => console.log("Got our task.", data));
    }

}
