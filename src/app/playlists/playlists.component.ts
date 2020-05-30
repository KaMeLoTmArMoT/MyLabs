import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  albums = [
    {
      name: "T-Fest молодость.",
      img: "../../assets/img/songs/song-1.jpg",
    },
    {
      name: "Some name should be here.",
      img: "../../assets/img/songs/song-2.jpg",
    },
    {
      name: "Казка - Плакала та інші.",
      img: "../../assets/img/songs/song-3.jpg",
    },
    {
      name: "Макс Корж альбом.",
      img: "../../assets/img/songs/song-4.jpg",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
