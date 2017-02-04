import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {HttpService} from "./httpService";
import {Observable} from "rxjs";
import {map} from "rxjs/operator/map";

@Injectable()
export class FaqService {
  constructor(private http: HttpService) {}

  getFaq  (): Observable<Faq>{

    return this.http.get('faq',{})
      .map(res => res.json())
      .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = error.status + "-" + (error.statusText || '');
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
