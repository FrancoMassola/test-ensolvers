import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    //declare backend endpoint
    private URL = 'http://localhost:4000'

  constructor(private http:HttpClient) { }

  //request to signin
  signinUser(user: any){
    return this.http.post<any>(`${this.URL}/signin`,user);
  }

  loggedIn(): any{
    //return true or false if the token exist in local storage
   return !!localStorage.getItem('token');
  }

}
