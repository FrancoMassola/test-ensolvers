import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FolderServiceService } from 'src/app/services/folder-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder-table',
  templateUrl: './folder-table.component.html',
  styleUrls: ['./folder-table.component.css']
})
export class FolderTableComponent implements OnInit {

  constructor(private folderService: FolderServiceService, private router: Router) { }

  folderArray: Folder[] = [];

  ngOnInit(): void {
    this.getAllTheFolders()
  }


  //function to get all the tasks and set to the array to handle it
  getAllTheFolders() {
    this.folderService.getAllFolders().subscribe(res=>{
        res.map((folder) => {
          this.folderArray.push(folder);
        });
    })
  }

  updateFolderList(newFolder: any){
    this.folderArray=[...this.folderArray,newFolder]
    //Refresh the task list when one new folder was added
    this,this.folderArray=[];
    this.getAllTheFolders();
  }

  goToListTasks=(folderId: any)=>{
    this.router.navigate([`/tasks/${folderId}`])
  }

  deleteFolder=(folderId: any)=>{
    this.folderService.deleteFolder(folderId).subscribe(res=>{
      this.folderArray = [];
      this.getAllTheFolders();
    })
  }

}
