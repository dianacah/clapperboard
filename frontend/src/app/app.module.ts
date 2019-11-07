import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { AdminComponent } from "./admin/admin.component";
import { MovieComponent } from "./movie/movie.component";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from "@angular/material";

import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";
import { FavSectionComponent } from "./fav-section/fav-section.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
  },
  { path: "reproductor", component: MovieComponent },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "peliculas",
    component: SearchComponent
  },
  {
    path: "welcome",
    component: AuthenticationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MovieComponent,
    NavComponent,
    SearchComponent,
    FavSectionComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
