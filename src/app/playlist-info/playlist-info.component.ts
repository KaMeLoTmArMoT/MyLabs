import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.css']
})
export class PlaylistInfoComponent implements OnInit {

  name = '';

  album = {
      name: '',
      author: '',
      info: '',
      img: '',
      songs: [
        {
          name: '',
          author: '',
          listenings: 0
        }
      ]
    };

  constructor(private _album: AlbumService) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    // localStorage.removeItem('name');
  }
}
