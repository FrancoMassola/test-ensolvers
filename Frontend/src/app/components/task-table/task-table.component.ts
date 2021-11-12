import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { TaskServiceService } from 'src/app/services/task-service.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  
  constructor(private taskService: TaskServiceService, private formBuilder: FormBuilder ) {
    
  }

  taskForm!: FormGroup;
  taskArray:Task[]=[];  

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((res) => {
      res.map(task=>{
        this.taskArray.push(task)
      })      
      console.log(this.taskArray);
      
      
    });
  }
}
