import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent  {
  constructor(private router: Router){}

  isLoggedIn(): boolean{
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
