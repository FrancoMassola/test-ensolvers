import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-input-task',
  templateUrl: './update-input-task.component.html',
  styleUrls: ['./update-input-task.component.css'],
})
export class UpdateInputTaskComponent implements OnInit {
  constructor(
    private taskService: TaskServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  updateTask!: FormGroup;
  taskId!: String;
  taskFounded: any = {
    id_task: 0,
    name_task: '',
    status_task: false,
    id_task_folder: 1,
  };

  ngOnInit(): void {
    this.updateTask = new FormGroup({
      name_task: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    // get the task id by url
    this.taskId = this.route.snapshot.params['id'];
    console.log(this.taskId);
    this.taskService.getTaskById(this.taskId).subscribe(
      (res) => {
        //get a especific task by id
        this.taskFounded.id_task = res.id_task;
        this.taskFounded.name_task = res.name_task;
        this.taskFounded.status_task = res.status_task;
        this.taskFounded.id_task_folder = res.id_task_folder;
      },
      (err) => {}
    );
  }

  updateTaskData(taskUpdated: any) {
    this.taskFounded.name_task = taskUpdated.name_task;
    //Send the task to update
    this.taskService.updateTask(this.taskId, this.taskFounded).subscribe(
      (res) => {
        this.router.navigate(['tasks'])
      },
      (err) => {}
    );
  }
}
