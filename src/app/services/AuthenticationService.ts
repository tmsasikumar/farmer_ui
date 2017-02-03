import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  login(username: string, password: string) {
    return this.http.post('http://localhost:8081/api/login', { emailId: username, password: password })
      .map((response: Response) => {

        console.log(response.json());
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
