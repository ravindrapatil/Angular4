import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { UsersService } from "../app/providers/users.service";
import { AuthguardGuard } from "../app/providers/authguard.guard";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appRouterModule } from './app.routes';
import { DasboardComponent } from '../app/dasboard/dasboard.component';
import { CompaniesComponent } from '../app/companies/companies.component';
import { HeaderComponent } from '../app/header/header.component';
import { LoginComponent } from '../app/login/login.component';
import { SinglePostComponent } from "app/dasboard/single-post/single-post.component";
import { SinglePostServiceService } from "app/providers/single-post-service.service";
import { FirebasedbdataService } from "app/providers/firebasedbdata.service";
import { BlogComponent } from "app/blog/blog.component";

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    CompaniesComponent,
    HeaderComponent,
    LoginComponent,
    SinglePostComponent,
    BlogComponent
  ],
  entryComponents: [
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    UsersService,
    AuthguardGuard,
    SinglePostServiceService,
    FirebasedbdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
