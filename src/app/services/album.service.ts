import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _getAlbumsUrl = "http://localhost:3000/api/albums";
  private _postAlbumUrl = "http://localhost:3000/api/addAlbum";
  constructor(private http: HttpClient,) { }

  getAlbums() {
    return this.http.get(this._getAlbumsUrl);
  }

  postAlbum(album) {
    return this.http.post<any>(this._postAlbumUrl, album);
  }
}
