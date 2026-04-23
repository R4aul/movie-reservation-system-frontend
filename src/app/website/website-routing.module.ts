import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./components/layout/layout.component";

import { HomeComponent } from "./pages/home/home.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";

import { guestGuard } from "../guards/guest.guard";

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path:':id/detail',
        component:MovieDetailComponent
      }
    ]
  },
  {
    path:'login',
    loadComponent: () => import('./pages/auth/login/login.component').then((c) => c.LoginComponent),
    canActivate:[guestGuard]
  },
  {
    path:'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(c => c.RegisterComponent),
    canActivate:[guestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
