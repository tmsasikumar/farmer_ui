import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/AuthenticationService";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  model: any = {};
  constructor(
    private authenticationService: AuthenticationService){ }

  login(){
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          console.log("success");
        },
        error => {
          console.log("failure");
        });

  }

}
