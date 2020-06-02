import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _getAlbumsUrl = "http://localhost:3000/api/albums";
  private _getAlbumUrl = "http://localhost:3000/api/album";
  private _getAlbumIdUrl = "http://localhost:3000/api/albumId";
  private _postAlbumUrl = "http://localhost:3000/api/addAlbum";
  private _updateSubscription = "http://localhost:3000/api/subscribe";
  private _cancelSubscription = "http://localhost:3000/api/unsubscribe";
  private _getUserAlbumsUrl = "http://localhost:3000/api/userAlbums";
  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<any>(this._getAlbumsUrl);
  }

  getAlbum(name) {
    return this.http.post<any>(this._getAlbumUrl, name);
  }

  getAlbumId(id) {
    return this.http.post<any>(this._getAlbumIdUrl, id);
  }

  postAlbum(album) {
    return this.http.post<any>(this._postAlbumUrl, album);
  }

  subscribeToAlbum(data) {
    return this.http.post(this._updateSubscription, data)
  }

  unsubscribeAlbum(data) {
    return this.http.post(this._cancelSubscription, data)
  }

  getUserAlbums(data) {
    return this.http.post<any>(this._getUserAlbumsUrl, data);
  }
}
