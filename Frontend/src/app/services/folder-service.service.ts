import { Injectable } from '@angular/core';
import { Folder } from '../models/folder';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

  constructor(private http: HttpClient) { }

  //declare backend endpoint
  private URL = 'http://localhost:4000'


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllFolders():Observable<Folder[]>{
    return this.http.get<Folder[]>(`${this.URL}/folders`);
  }

  createNewFolder(folder: Folder):Observable<any>{
    return this.http.post<Folder>(`${this.URL}/folders`,folder,this.httpOptions);
  }

  getFolderTasks(folderId: any):Observable<Task[]>{
    return this.http.get<Task[]>(`${this.URL}/folderTasks/`+folderId);
  }
  

}
