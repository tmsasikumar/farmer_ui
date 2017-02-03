import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  baseUrl = "http://localhost:8081/api/";

  constructor(private http: Http) { }

  private encodeQueryData(params: {}): string {
    let ret: any[];
    for (let param in params)
      ret.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
    return ret.join('&');
  }


  post(relativeUrl: string, params: {}){
    return this.http.post(this.baseUrl + relativeUrl, params)
  }

  get(relativeUrl: string, params: {}) {
    return this.http.get(this.baseUrl + relativeUrl + "?" + this.encodeQueryData(params))
  }

}
