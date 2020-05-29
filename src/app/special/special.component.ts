import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  specialEvents = []
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => console.log(err)
      )
  }
}
