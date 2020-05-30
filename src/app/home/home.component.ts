import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs = [
    {
      id: 1,
      name: "Dance",
      author: "Larry",
      listenings: "112,901.123"
    },
    {
      id: 2,
      name: "Hit",
      author: "Griph",
      listenings: "33,123.199"
    },
    {
      id: 3,
      name: "So so",
      author: "Goblin",
      listenings: "12,491.123"
    },
    {
      id: 4,
      name: "Summertime",
      author: "Visa",
      listenings: "6,134.884"
    },
    {
      id: 5,
      name: "Shake it",
      author: "Relig",
      listenings: "539.323"
    },
  ]

  singers = [
    {
      id: '#coll-1',
      name: "Freddie Mercury",
      title: "Time kill machine",
      image: "../../assets/img/singers/singer-1.jpg",
      text: "Freddie Mercury (born Farrokh Bulsara, 5th September 1946 - 24th November 1991) was a Zanzibari-born British singer of Indian descent, songwriter and record producer, known as the lead vocalist and songwriter of the British rock band Queen. He also became known for his flamboyant stage persona and four-octave vocal range. Before he became a singer he has been in 3 other bands (Ibex, Sour Milk Sea, and The Hectics). He died on November 24, 1991 from bronchopneumonia as a result from HIV/AIDS"
    },
    {
      id: '2',
      name: "Michael Jackson",
      title: "Best of the best",
      image: "../../assets/img/singers/singer-2.jpg",
      text: "Michael Joseph Jackson was an American singer, dancer, and songwriter born on August 29, 1958 in Gary, Indiana and passed away on June 25, 2009. He donated (at least) a remarkable 500,000,000 dollars to charity. Michael is also known as The King of Pop (a title given to him by Elizabeth Taylor) or under the initials MJ."
    },
    {
      id: '3',
      name: "Elvis Presley",
      title: "Someone fantastic",
      image: "../../assets/img/singers/singer-3.jpg",
      text: 'Elvis Presley was an American musician and actor. Known as "The King" He was mostly known for his number 1 singles including "Heartbreak Hotel" "Hound Dog" "Jailhouse Rock" "Love me Tender" Elvis debuted in the movie "Love me Tender" and focused less on his music and continued that way.'
    },
    {
      id: '4',
      name: "Whitney Houston",
      title: "Face of the fashion",
      image: "../../assets/img/singers/singer-4.jpg",
      text: "Whitney Elizabeth Houston (August 9, 1963 – February 11, 2012) was an American singer, actress, producer, and model. In 2009, Guinness World Records cited her as the most awarded female act of all time. Houston is one of pop music's best-selling music artists of all-time, with an estimated 170–200 million records sold worldwide. She released seven studio albums and three movie soundtrack albums, all of which have diamond, multi-platinum, platinum or gold certification."
    },
    {
      id: '5',
      name: "John Lennon",
      title: "Time kill machine",
      image: "../../assets/img/singers/singer-5.jpg",
      text: "John Winston Ono Lennon, MBE was an English singer and songwriter who rose to worldwide fame as a co-founder of the Beatles, the most commercially successful band in the history of popular music. He was assassinated by Mark David Chapman on December 8, 1980 at age 40."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
