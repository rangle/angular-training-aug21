import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  private baseOptions = {
    headers: {
      bearer: '136271783',
    }
  };

  constructor(private http: Http) {
  }

  endPoint(url) {
    return this.BASE_URL + url;
  }

  extendOptions(options) {
    return {
      ...this.baseOptions,
      ...options,
    };

    // return Object.assign({}, this.baseOptions, options);
  }

  get(url: string, options?) {
    return this.http
      .get(
        this.endPoint(url), this.extendOptions(options),
      )
      .map(res => res.json())
      .catch((err) => {
        console.error(err);
        return Observable.throw(
          `http request failed, status: ${err.status}`
        );
      });
  }

  post(url: string, body, options?) {
    return this.http
      .post(
        this.endPoint(url), body, this.extendOptions(options),
      )
      .map(res => res.json());
  }

}
