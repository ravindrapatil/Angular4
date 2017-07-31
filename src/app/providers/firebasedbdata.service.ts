import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebasedbdataService {

  constructor(private af: AngularFireDatabase) { }

  getPostsFromFirebase(): Observable<any> {
    return this.af.list('/posts', {
      query: {
        orderByKey: true,
        limitToFirst: 10
      }
    }).do(console.log);
  }

}
