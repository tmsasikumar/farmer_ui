import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {HttpService} from "./httpService";
import {Observable} from "rxjs/Observable";

@Injectable()
export class farmerService {
  constructor(private http: HttpService) {

  }

  getAllFarmers () : Observable<Farmer[]> {
    return this.http.get('farmer', {})
      .map(res => res.json());
  }

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
