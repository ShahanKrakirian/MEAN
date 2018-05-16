import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: any;
  all_tasks = [];
  edit_button = 0;
  edit_task: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.task = {title: "", description: ""};
    this.edit_task = {_id: "", title: "", description: ""};
    this.getAllTasksFromService();
  }

  newTaskFromService(){
    this._httpService.newTask(this.task).subscribe(data => {
      this.getAllTasksFromService();
    })
  }

  getAllTasksFromService(){
    this.all_tasks = [];
    this._httpService.getAllTasks().subscribe(data => {
      for (var task in data){
        this.all_tasks.unshift(data[task]);
      }
    })
  }

  deleteTaskFromService(task){
    this._httpService.deleteTask(task).subscribe(data => {
      this.getAllTasksFromService();
    })
  }

  editTaskFromService(){
    this._httpService.editTask(this.edit_task).subscribe(data => {
      this.getAllTasksFromService();
    })
  }

  openEdit(edit){
    this.edit_task._id = edit._id;
    this.edit_task.title = edit.title;
    this.edit_task.description = edit.description;
    this.edit_button = 1;
  }


}
