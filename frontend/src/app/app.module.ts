import { PopupEditarPeliComponent } from "./popup-editar-peli/popup-editar-peli.component";
import { PopupNuevaPeliComponent } from "./popup-nueva-peli/popup-nueva-peli.component";
import { PopupInfoPeliComponent } from "./popup-info-peli/popup-info-peli.component";
import { PopupNewFavComponent } from "./popup-new-fav/popup-new-fav.component";
import { HttpClientModule } from "@angular/common/http";

import { GenComponent } from "./gen/gen.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MatDialogModule } from "@angular/material";
import { AdminComponent } from "./admin/admin.component";
import { MovieComponent } from "./movie/movie.component";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule
} from "@angular/material";

import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";
import { FavSectionComponent } from "./fav-section/fav-section.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReleasesComponent } from "./releases/releases.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavGendersComponent } from "./nav-genders/nav-genders.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
  },
  { path: "ver-peliculas", component: PeliculasComponent },
  {
    path: "perfil",
    component: ProfileComponent
  },
  {
    path: "releases",
    component: ReleasesComponent
  },
  {
    path: "search",
    component: SearchComponent
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
    SignupComponent,
    PeliculasComponent,
    ProfileComponent,
    GenComponent,
    ReleasesComponent,
    PopupInfoPeliComponent,
    PopupNuevaPeliComponent,
    PopupEditarPeliComponent,
    PopupNewFavComponent,
    NavGendersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupNuevaPeliComponent,
    PopupInfoPeliComponent,
    PopupEditarPeliComponent,
    PopupNewFavComponent
  ]
})
export class AppModule {}
