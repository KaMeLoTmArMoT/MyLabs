import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../services/album.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data = {
    id: ''
  }
  albId = {
    id: ''
  }
  albums = []
  hide = false;
  delete = false;
  constructor(private _album: AlbumService,
              private _router: Router,
              private _auth: AuthService) { }

  ngOnInit() {
    this.loadSubscribedAlbums();
  }

  toggle() {
    this.hide = !this.hide;
  }

  loadSubscribedAlbums() {
    this.data.id = localStorage.getItem('id');
    this._album.getUserAlbums(this.data)
      .subscribe(
        res => {
          for (let i = 0 ; i < res.length ; i++) {
            this.albId.id = res[i].name;
            this._album.getAlbumId(this.albId)
              .subscribe(
                res => {
                  this.albums.push(res.album)
                },
                err => {
                  console.log(err);
                }
              )
          }
        },
        err => {
          console.log(err)
        }
      )

    console.log(this.albums);
  }

  deleteAlert() {
    this.delete = true;
  }

  deleteAcc() {
    this.data.id = localStorage.getItem('id');

    this._auth.deleteUser(this.data)
      .subscribe(
        res => {
          console.log(res.text)
          this._auth.logoutUser();
        },
          err => {
          console.log(err)
        }
      )
    //this._router.navigate(['/home'])
  }
}
