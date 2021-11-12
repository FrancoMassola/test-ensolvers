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
  constructor(
    private taskService: TaskServiceService,
    private router: Router
  ) {}

  taskArray: Task[] = [];

  ngOnInit(): void {
    this.getAllTheTasks();
  }

  //update the task list when a new task was added
  updateList(e: any) {
    this.taskArray = [...this.taskArray, e];
  }

  goToEditView(taskId: any) {
    this.router.navigate([`/editTask/${taskId}`]);
  }

  deleteTask = (e: any) => {
    this.taskService.deleteTask(e).subscribe(
      (res) => {
        this.taskArray = [];
        this.getAllTheTasks();
      },
      (err) => {}
    );
  };

  //function to get all the tasks and set to the array to handle it
  getAllTheTasks() {
    this.taskService.getAllTasks().subscribe((res) => {
      res.map((task) => {
        this.taskArray.push(task);
      });
    });
  }
}
