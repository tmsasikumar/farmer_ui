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
  isDuplicate: boolean;
  hasError: boolean;
  constructor(
    private router: Router,
    private httpService: HttpService,
    private authenticationService: AuthenticationService){
    this.isDuplicate = false;
    this.hasError = false;
  }

  register(){
    this.httpService.post("register", this.model)
      .subscribe(
        data => {
          this.authenticationService.login(this.model.emailId, this.model.password)
            .subscribe(
              data => {
                this.router.navigate(['/home']);
              },
              error => {
              });
        },
        error => {
          if(error.status == 409){
            this.isDuplicate = true;
          }
          this.hasError = true;
        });
  }
}
