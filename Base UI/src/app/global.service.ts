import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {
  constructor (
    private http: Http
  ) {}
  public baseUrl = 'http:\\\\localhost:8080\\api\\'
  getList() {
    return this.http.get(this.baseUrl + 'getEmployees')
    .map((res) => res.json());
  }

}