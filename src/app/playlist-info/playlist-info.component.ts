import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.css']
})
export class PlaylistInfoComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    localStorage.removeItem('name');
  }

}
