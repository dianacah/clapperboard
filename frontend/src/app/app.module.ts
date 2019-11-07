import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
import { MovieComponent } from './movie/movie.component';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
=======
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

>>>>>>> 1960bd6c5e9fac70165a80a26b305b089467e82d

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    AdminComponent,
    MovieComponent,
=======
    NavComponent,
    SearchComponent,
    FavSectionComponent
>>>>>>> 1960bd6c5e9fac70165a80a26b305b089467e82d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
=======
    RouterModule.forRoot(routes),
>>>>>>> 1960bd6c5e9fac70165a80a26b305b089467e82d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

