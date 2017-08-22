import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {
  }

  endPoint(url) {
    return this.BASE_URL + url;
  }

  get(url: string, options?) {
    return this.http
      .get(this.endPoint(url), options)
      .map(res => res.json());
  }

  post(url: string, body, options?) {
    return this.http
      .post(this.endPoint(url), body, options)
      .map(res => res.json());
  }

}
