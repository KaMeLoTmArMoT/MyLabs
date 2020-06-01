import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hide = !this.hide;
  }

}
