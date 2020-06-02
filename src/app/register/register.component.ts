import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email: '',
    password: ''
  }

  err: '';

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    // console.log(this.registerUserData)

    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          localStorage.setItem('id', res.id)
          this._router.navigate(['/special'])
        },
        err => {
          console.log(err)
          console.log(err.error)
          this.err = err.error;
        }
      );
  }

}
