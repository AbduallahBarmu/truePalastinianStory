import { Component, OnInit } from "@angular/core";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { Event } from '../../../interface/event'

@Component({
  selector: "app-event-profile",
  templateUrl: "./event-profile.component.html",
  styleUrls: ["./event-profile.component.scss"]
})
export class EventProfileComponent implements OnInit {
  event: Event | undefined;


  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ngGetEventById();
    console.log("my event", event);
  }


  ngGetEventById() {
    const eventId = this.route.snapshot.params["id"];
    this.eventService.getEventById(eventId).subscribe(data => {
      this.event = data
      console.log(this.event)
    });
  }
}
