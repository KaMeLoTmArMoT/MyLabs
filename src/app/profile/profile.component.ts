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
  data_id = {
    id: '',
    token: ''
  }
  albId = {
    id: ''
  }
  albums = []
  hide = false;
  delete = false;
  userData = {
    email: '',
    password: ''
  }
  updateData = {
    id: '',
    token: '',
    password: '',
    email: ''
  }
  unsubscribe = {
    id: '',
    albId: '',
    token: ''
  }
  constructor(private _album: AlbumService,
              private _router: Router,
              private _auth: AuthService) { }

  ngOnInit() {
    this.loadSubscribedAlbums();
    this.loadUserData();
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
  }

  loadUserData() {
    this.data_id.id = localStorage.getItem('id');
    this.data_id.token = localStorage.getItem('token');

    this._auth.loadUserData(this.data_id)
      .subscribe(
        res => {
          this.userData = res
        },
        err => {
          console.log(err)
        }
      );
  }

  updateUserData() {
    this.updateData.id = localStorage.getItem('id');
    this.updateData.token = localStorage.getItem('token');

    this._auth.updateUserData(this.updateData)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );

    window.location.reload();
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

  unSubscribe(albId) {
    this.unsubscribe.id = localStorage.getItem('id')
    this.unsubscribe.albId = albId
    this.unsubscribe.token = localStorage.getItem('token')

    this._album.unsubscribeAlbum(this.unsubscribe)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )

    window.location.reload()
  }
}
