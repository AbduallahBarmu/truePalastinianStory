import { Component } from "@angular/core";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import {Events} from '../../../interface/events'; 

@Component({
  selector: "app-time-line-event",
  templateUrl: "./time-line-event.component.html",
  styleUrls: ["./time-line-event.component.scss"]
})
export class TimeLineEventComponent {
  data: Events[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.ngGetEvents();
  }


 ngGetEvents(){
   this.eventService.getEvents().subscribe(data => {
    this.data = data;
  });
}

  // async GetEvents(){
  //  this.data = await this.eventService.getEvents() ;  
  // }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
