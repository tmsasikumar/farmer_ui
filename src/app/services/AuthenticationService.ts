import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {HttpService} from "./httpService";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpService) {}

  login(emailId: string, password: string) {

    let params = { emailId: emailId, password: password };

    return this.http.post('login', params)
      .map((response: Response) => {
        let user = response.json();
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {

    localStorage.removeItem('currentUser');
  }
}
