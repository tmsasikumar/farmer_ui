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

  isFef(): boolean {
      return this.isLoggedIn() && JSON.parse(localStorage.getItem("currentUser")).role == 'FEF';
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
