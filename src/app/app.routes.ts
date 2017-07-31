import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from '../app/dasboard/dasboard.component';
import { CompaniesComponent } from '../app/companies/companies.component';
import { LoginComponent } from '../app/login/login.component';
import { AuthguardGuard } from "../app/providers/authguard.guard";
import { BlogComponent } from "app/blog/blog.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DasboardComponent
  },
  {
    path: 'companies',
    canActivate: [AuthguardGuard],
    component: CompaniesComponent
  },
  {
    path: 'blog',
    canActivate: [AuthguardGuard],
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

export const appRouterModule = RouterModule.forRoot(routes);