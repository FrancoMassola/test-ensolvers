import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  //declare backend endpoint
  private URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.URL}/tasks`);
  }
  

}
