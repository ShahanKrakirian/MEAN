import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    }
    getTasks(){
      return this._http.get('/index')
    }
    getTask(){
      return this._http.get('tasks/5af5e1062c93ab2f943dc207')
    }
}
