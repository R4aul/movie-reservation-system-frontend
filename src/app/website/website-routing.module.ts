import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./components/layout/layout.component";

import { HomeComponent } from "./pages/home/home.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
