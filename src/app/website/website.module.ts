import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    LayoutComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
