import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  loginForm!: FormGroup;
  user = {
    user_name: "",
    password: ""
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user_name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  login(form: any) {
    this.user.user_name = form.user_name;
    this.user.password = form.password;
    this.loginService.signinUser(this.user).subscribe(res=>{
     localStorage.setItem('token',res.token)
     this.router.navigate(['folders'])
    },
    err=>{
        alert('signin failed') 
    })
    
  }
}
