import { Component, OnInit, ViewChild, AfterViewInit, Renderer2, Renderer, AfterContentInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService } from "app/providers/users.service";
import { Router } from '@angular/router';
import { SinglePostComponent } from "app/dasboard/single-post/single-post.component";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('para1') p1;
  @ViewChild('input1') input1;
  @ViewChild('container', {read: ViewContainerRef}) container;
  
  myObj: { fname: string; lname: string; };
  name = '';

  constructor(private user: UsersService, private router: Router, private renderer: Renderer2, 
    private renderer1: Renderer, private resolver: ComponentFactoryResolver,
    private af: AngularFireDatabase) { 
    this.myObj = {
      fname: 'Ravindra',
      lname: 'Patil'
    }

    //Firebase Database
    const users$: FirebaseListObservable<any> = this.af.list('/users');
    users$.subscribe(console.log);
  }

  ngOnInit() {
    this.name = this.user.userName;
    console.log("Is user logged in? " + this.user.getUserLoggedIn() + " " + this.name);
  }

  ngAfterViewInit() {
    //By doing this is not safe with platform browsers. It is not supported with web workers. 
    //Web workes will never get to know when DOM updates. That is the reson we have to use the render.
    //console.log(this.p1.nativeElement);
    //this.p1.nativeElement.style.color = 'red';

    this.renderer.setStyle(
      this.p1.nativeElement,
      'color',
      'red'
    );

    this.renderer1.invokeElementMethod(
      this.input1.nativeElement,
      'focus'
    )
  }

  ngAfterContentInit() {
    const singlePostFactory = this.resolver.resolveComponentFactory(SinglePostComponent);
    this.container.createComponent(singlePostFactory);
    this.container.createComponent(singlePostFactory);
    const singlePostRef = this.container.createComponent(singlePostFactory);
    singlePostRef.instance.postTitle2 = "Dynamic Factory Title";
  }

}
