import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
//import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class SinglePostServiceService {

  private rootURL = "https://jsonplaceholder.typicode.com";

  constructor(private _http:Http) { }

  getPosts() {
    return this._http.get(`${this.rootURL}/posts`).map(res => res.json());
  }
}