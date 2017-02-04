import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/AuthenticationService";
import {Router} from "@angular/router";
import {HttpService} from "../../services/httpService";

@Component({
  moduleId: module.id,
  selector: 'Register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

  model: any = {};
  constructor(
    private router: Router,
    private httpService: HttpService,
    private authenticationService: AuthenticationService){
  }

  register(){
    this.httpService.post("register", this.model)
      .subscribe(
        data => {
          this.authenticationService.login(this.model.emailId, this.model.password)
            .subscribe(
              data => {
                this.router.navigate(['/dashboard']);
              },
              error => {
              });
        },
        error => {
        });
  }
}
