import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() urlBack = '';
  @Input() buttonTitle = '';

  url!: string;

  constructor(private router: Router) {
   }
  

  ngOnInit(): void {
  
  }
  
  goBack(){
    if(this.buttonTitle=='Logout'){
      //remove all the local storage items
      localStorage.clear();
    }
    this.router.navigate([this.urlBack])
  }


}
