import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { UsersService } from "app/providers/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private user:UsersService) { 
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ["", Validators.required]
    })
  }

  ngOnInit() {
  }

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    if(email == "admin@admin.com" && password == "admin") {
      this.user.setUserLoggedIn(email);
      this.router.navigate(['dashboard']);
    }
  }

}
