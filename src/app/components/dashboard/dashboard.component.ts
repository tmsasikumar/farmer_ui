import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  userName: string;
  constructor(){
    let user = JSON.parse(localStorage.getItem("currentUser"));
    this.userName = user["userName"];
  }

}
