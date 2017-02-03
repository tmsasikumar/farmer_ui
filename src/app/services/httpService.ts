import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  baseUrl = "http://localhost:8081/api/";

  constructor(private http: Http) { }

  post(relativeUrl: string, params: {}){
    return this.http.post(this.baseUrl + relativeUrl, params)
  }

}
