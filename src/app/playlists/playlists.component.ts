import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  albums = [
    {
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
    }
  ];

  constructor(private _router: Router,
              private _album: AlbumService) { }

  ngOnInit() {
    this._album.getAlbums()
      .subscribe(
        res => {
          console.log(res);
          this.albums = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  getAlbum(name) {
    localStorage.setItem("name", name)
    this._router.navigate(['/playlist-info']);
  }
}
