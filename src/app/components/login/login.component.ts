import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/AuthenticationService";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  model: any = {};
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService){ }

  login(){
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log("failure");
        });

  }

}
