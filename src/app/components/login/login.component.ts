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
  hasError: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService){
    this.hasError = false;
  }


  login(){
    this.authenticationService.login(this.model.emailId, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.hasError = true;
        });

  }

}
