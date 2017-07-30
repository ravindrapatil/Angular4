import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() postTitle: Object;
  @Input() postTitle2: String = "Default Title";
  
  constructor() { }

  ngOnInit() {
    console.log(this.postTitle);
  }

}
