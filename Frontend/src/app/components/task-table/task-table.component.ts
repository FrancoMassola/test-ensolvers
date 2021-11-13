import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from '../../models/task';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  constructor(
    private taskService: TaskServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  taskArray: Task[] = [];
  taskToUpdate!: any;
  folderId: any;

  ngOnInit(): void {
    this.getAllTheFolderTasks();
    localStorage.setItem('folderId', this.folderId);
  }

  //update the task list when a new task was added
  updateList(newTask: any) {
    this.taskArray = [...this.taskArray, newTask];
  }

  goToEditView(taskId: any) {
    this.router.navigate([`/editTask/${taskId}`]);
  }

  deleteTask = (taskToDelete: any) => {
    this.taskService.deleteTask(taskToDelete).subscribe(
      (res) => {
        this.taskArray = [];
        this.getAllTheFolderTasks();
      },
      (err) => {
        alert("Error about delete a task request ->"+ err);
      }
    );
  };

  //function to get all the tasks and set to the array to handle it
  getAllTheFolderTasks() {
    // get the task id by url
    this.folderId = this.route.snapshot.params['id_folder'];
    this.taskService.getAllFolderTasks(this.folderId).subscribe((res) => {
      res.map((task) => {
        this.taskArray.push(task);
      });
    });
  }

  //change the status of a task
  statusChanged(task_status: any, task_id: any) {
    this.taskService.getTaskById(task_id).subscribe(
      (res) => {
        res.status_task = task_status;
        this.taskService.updateTask(task_id, res).subscribe(
          (res) => {
            console.log('updated');
          },
          (err) => {
            alert("Error about update a task request ->"+ err);
          }
        );
      },
      (err) => {
        alert("Error about get a especific task request ->"+ err);
      }
    );
  }
}
