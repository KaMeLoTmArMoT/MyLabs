import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../services/album.service";

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

  constructor(private _album: AlbumService) { }

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
}
