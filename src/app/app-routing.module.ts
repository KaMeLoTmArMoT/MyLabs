import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from "./events/events.component";
import { SpecialComponent } from "./special/special.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {AuthGuard} from "./auth.guard";
import {HomeComponent} from "./home/home.component";
import {PlaylistsComponent} from "./playlists/playlists.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
