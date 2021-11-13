import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folders-view',
  templateUrl: './folders-view.component.html',
  styleUrls: ['./folders-view.component.css']
})
export class FoldersViewComponent implements OnInit {

  constructor() { }

  title = '';

  ngOnInit(): void {
    this.title = "Logout"
  }

}
