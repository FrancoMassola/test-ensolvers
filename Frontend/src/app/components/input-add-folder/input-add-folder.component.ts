import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Folder } from 'src/app/models/folder';
import { FolderServiceService } from 'src/app/services/folder-service.service';

@Component({
  selector: 'app-input-add-folder',
  templateUrl: './input-add-folder.component.html',
  styleUrls: ['./input-add-folder.component.css']
})
export class InputAddFolderComponent implements OnInit {

  constructor(private folderService: FolderServiceService) { }
  @Output() newFolderAdded = new EventEmitter<any>();
  newFolderData!: FormGroup;

  ngOnInit(): void {
    this.newFolderData = new FormGroup({
      name_folder: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }


  saveFolderData(form: any) {
    let folderToSend: Folder = {
      id_folder: 0,
      name_folder: form.name_folder
    };
    this.folderService.createNewFolder(folderToSend).subscribe(
      (res) => {
        this.folderService.getAllFolders().subscribe(
          (res) => {
            //send the data to the parent -task-table- component
            this.newFolderAdded.emit(folderToSend);
          },
          (err) => {
            alert("Error in the get folders request ->"+ err);
          }
        );
      },
      (err) => {
        alert("Error about create new folder request ->"+ err);
      }
    );
  }

}
