import { Album } from "./album";

export const ALBUMS: Album[] = [
  {
    author: "Andrii",
    img: "../../assets/img/songs/song-1.jpg",
    info: "Some info should be here and it is one of 4 authors at this site.",
    name: "T-Fest молодость.",
    songs: [
      {
        _id: "5ed42e6d9e72b31c10627c74",
        name: "First",
        author: "Andrii",
        listenings: 123342555
      }
    ]
  },
  {
    author: "New",
    img: "../../assets/img/songs/song-2.jpg",
    info: "Some info should be here and it is one of 4 authors at this site.",
    name: "Someone Else",
    songs: [
      {
        _id: "5ed42e6d9e72b31c10627c74",
        name: "First",
        author: "Andrii",
        listenings: 123342555
      }
    ]
  }
]
