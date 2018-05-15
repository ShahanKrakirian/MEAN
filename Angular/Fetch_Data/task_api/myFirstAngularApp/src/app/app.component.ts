import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allTasks = [];
  oneTask;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    this.getTaskFromService();
  }

  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      for (var thing in data.all_tasks){
        var add = data.all_tasks[thing].title + " - " + data.all_tasks[thing].description;
        this.allTasks.push(add);
      }
      console.log(this.allTasks);
    });
  }
  getTaskFromService(){
    this._httpService.getTask().subscribe(data => {
      this.oneTask= data.task.title + " - " + data.task.description;
    });
  }
}