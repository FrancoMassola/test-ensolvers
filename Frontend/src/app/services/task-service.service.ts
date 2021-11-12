import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  //declare backend endpoint
  private URL = 'http://localhost:4000'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.URL}/tasks`);
  }
  
  createNewTask(task: any):Observable<any>{
    return this.http.post<Task>(`${this.URL}/tasks`,task,this.httpOptions);
  }

}
