import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {HttpService} from "./httpService";

@Injectable()
export class farmerService {
  constructor(private http: HttpService) {}

  add(farmer: any) {

    //let params = { emailId: username, password: password };

    return this.http.post('farmer', farmer)
      .map((response: Response) => {

        console.log(response.json());
        // let user = response.json();
        // if (user) {
        //   localStorage.setItem('currentUser', JSON.stringify(user));
        // }
      });
  }


}
