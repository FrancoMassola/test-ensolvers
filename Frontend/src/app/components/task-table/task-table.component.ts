import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from '../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  constructor(private taskService: TaskServiceService, private router: Router) {}

  taskArray: Task[] = [];

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((res) => {
      res.map((task) => {
        this.taskArray.push(task);
      });
      console.log(this.taskArray);
    });
  }

  //update the task list when a new task was added
  updateList(e: any) {
    this.taskArray = [...this.taskArray, e];
  }

  goToEditView(taskId: any){
    console.log(taskId);
    this.router.navigate(['/editTask']);
  }

}
