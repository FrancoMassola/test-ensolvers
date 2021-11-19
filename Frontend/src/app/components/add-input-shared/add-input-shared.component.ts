import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-input-shared',
  templateUrl: './add-input-shared.component.html',
  styleUrls: ['./add-input-shared.component.css'],
})
export class AddInputSharedComponent implements OnInit {
  constructor(
    private taskService: TaskServiceService,
    private route: ActivatedRoute
  ) {}
  @Output() addTaskEvent = new EventEmitter<any>();
  newTaskData!: FormGroup;
  folderId: any;

  ngOnInit(): void {
    this.newTaskData = new FormGroup({
      name_task: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  saveTaskData(form: any) {
    //get the folder id to add a new task
    this.folderId = this.route.snapshot.params['id_folder'];

    let taskToSend: Task = {
      id_task: 0,
      name_task: form.name_task,
      status_task: 0,
      id_task_folder: this.folderId,
    };
    this.taskService.createNewTask(taskToSend).subscribe(
      (res) => {
        //send the data to the parent -task-table- component
        this.addTaskEvent.emit(taskToSend);
      },
      (err) => {
        alert('Error about the post new task request ->' + err);
      }
    );
  }
}