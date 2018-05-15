import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allTasks = [];
  oneTask = '';
  constructor(private _httpService: HttpService){}

  ngOnInit(){
  }

  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      this.allTasks=[]
      for (var thing in data.all_tasks){
        this.allTasks.push(data.all_tasks[thing]);
      }
    });
  }
  getTaskFromService(task_id){
    this.oneTask = ''
    this._httpService.getTask(task_id).subscribe(data => {
      this.oneTask = data.task;
    });
  }

}