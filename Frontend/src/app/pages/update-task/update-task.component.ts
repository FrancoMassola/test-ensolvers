import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor() { }

  urlBack:any;
  idFolder:any;
  title = 'Back';

  ngOnInit(): void {
    this.idFolder = localStorage.getItem('folderId');
    this.urlBack = `tasks/${this.idFolder}`; 
  }

}
