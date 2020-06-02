import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../services/album.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.css']
})
export class PlaylistInfoComponent implements OnInit {

  albumData = {
    name: ''
  }
  album: {
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
  nums: any;
  subscribeData = {
    id: '',
    token: '',
    albId: ''
  }

  constructor(private _album: AlbumService,
              private _auth: AuthService) { }

  ngOnInit() {
    this.albumData.name = localStorage.getItem('name');

    this._album.getAlbum(this.albumData)
      .subscribe(
        res => {
          this.album = res.album;
          this.nums = Array.from(Array(this.album.songs.length).keys());
        },
        err => {
          console.log(err)
        }
      );
  }

  subscribe(albName) {
    this.subscribeData.id = localStorage.getItem('id');
    this.subscribeData.token = localStorage.getItem('token');
    this.subscribeData.albId = albName;

    // Create or use existing service
    console.log(this.subscribeData);
    this._album.subscribeToAlbum(this.subscribeData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
