import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _deleteUrl = "http://localhost:3000/api/delete";
  private _loadDataUrl = "http://localhost:3000/api/getUserData";
  private _updateDataUrl = "http://localhost:3000/api/updateUserData";
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  deleteUser(user) {
    return this.http.post<any>(this._deleteUrl, user);
  }

  loadUserData(user) {
    return this.http.post<any>(this._loadDataUrl, user);
  }

  updateUserData(user) {
    return this.http.post<any>(this._updateDataUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')  // !! - returns True or False
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
