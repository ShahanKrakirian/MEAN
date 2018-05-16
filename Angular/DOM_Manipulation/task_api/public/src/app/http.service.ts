import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  newTask(task){
    return this._http.post('/api/tasks', task)
  }

  getAllTasks(){
    return this._http.get('/api/index');
  }

  deleteTask(task){
    return this._http.delete('/api/delete/' + task._id)
  }

  editTask(task){
    return this._http.put('/api/update/' + task._id, task);
  }

}
