import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent  {
  edited: boolean;
  constructor(private router: Router){
    this.edited = false;
  }



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
    this.edited = true;
    this.router.navigate(['/']);

    setTimeout(function() {
      this.edited = false;
    }.bind(this), 2000);

  }
}
