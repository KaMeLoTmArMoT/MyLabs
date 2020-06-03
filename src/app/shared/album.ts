export class Album {
  author: string;
  img: string;
  info: string;
  name: string;
  songs: [
    {
      _id: string;
      name: string;
      author: string;
      listenings: number;
    }
  ]
}
