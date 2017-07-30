import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/providers/users.service";
import { SinglePostServiceService } from "app/providers/single-post-service.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
 
  name = '';
  posts$;

  constructor(private user: UsersService, private postService:SinglePostServiceService) { }

  ngOnInit() {
    this.name = this.user.userName;
    console.log("Is user logged in? " + this.user.getUserLoggedIn() + " " + this.name);
    // this.postService.getPosts().subscribe(
    //   success => console.log(success)
    // )
    this.posts$ = this.postService.getPosts();
  }

}
