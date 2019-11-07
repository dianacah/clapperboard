import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FavSectionComponent } from './fav-section/fav-section.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "fav-section",
    component: FavSectionComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    FavSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

