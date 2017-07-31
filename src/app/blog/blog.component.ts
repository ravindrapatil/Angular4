import { Component, OnInit } from '@angular/core';
import { FirebasedbdataService } from "app/providers/firebasedbdata.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts$;

  constructor(private fbdbService:FirebasedbdataService) { }

  ngOnInit() {
    this.posts$ = this.fbdbService.getPostsFromFirebase()
      .publishReplay().refCount();
  }

}
