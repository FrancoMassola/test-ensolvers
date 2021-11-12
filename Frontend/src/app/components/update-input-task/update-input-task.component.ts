import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-input-task',
  templateUrl: './update-input-task.component.html',
  styleUrls: ['./update-input-task.component.css'],
})
export class UpdateInputTaskComponent implements OnInit {
  constructor() {}

  updateTask!: FormGroup;

  ngOnInit(): void {
    this.updateTask = new FormGroup({
      name_task: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  updateTaskData(e: any) {
    console.log(e);
  }
}
