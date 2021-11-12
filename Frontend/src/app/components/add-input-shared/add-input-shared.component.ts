import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-add-input-shared',
  templateUrl: './add-input-shared.component.html',
  styleUrls: ['./add-input-shared.component.css'],
})

export class AddInputSharedComponent implements OnInit {
  constructor(private taskService: TaskServiceService) {}
  @Output() newItemEvent = new EventEmitter<any>();
  newTaskData!: FormGroup;

  ngOnInit(): void {
    this.newTaskData = new FormGroup({
      name_task: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  saveTaskData(form: any) {
    let taskToSend: Task = {
      id_task: 0,
      name_task: form.name_task,
      status_task: 0,
      id_task_folder: 1,
    };
    this.taskService.createNewTask(taskToSend).subscribe(
      (res) => {
        this.taskService.getAllTasks().subscribe(
          (res) => {
            //send the data to the parent -task-table- component
            this.newItemEvent.emit(taskToSend);
          },
          (err) => {}
        );
      },
      (err) => {}
    );
  }
}
