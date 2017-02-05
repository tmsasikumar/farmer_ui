import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-farmers',
  templateUrl: 'my-farmers.component.html'
})


export class MyFarmersComponent {
  emailId: string;

  constructor(){
    let user = JSON.parse(localStorage.getItem("currentUser"));
    this.emailId = user["emailId"];
  }
}
