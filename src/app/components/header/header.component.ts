import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent  {
  constructor(private router: Router){}

  isLoggedIn(): boolean{
    return localStorage.getItem('currentUser') != null;
  }

  isFefOrSa(): boolean {
      if(this.isLoggedIn())  {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        return currentUser.role == 'FEF' || currentUser.role == 'SA';
      }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
