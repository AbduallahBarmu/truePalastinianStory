import { Component } from "@angular/core";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { Events } from "src/app/interface/events";
import { Event } from "src/app/interface/event";

@Component({
  selector: "app-event-profile",
  templateUrl: "./event-profile.component.html",
  styleUrls: ["./event-profile.component.scss"]
})
export class EventProfileComponent {
  
  data: Events[] = [];
  id!: string | null;
  event : any ; 


  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ){
    
  }
  ngOnInit(): void {
    this.ngGetEvents();
    this.ngGetEventById(); 
    
   }

   ngGetEvents(){
   this.eventService.getEvents().subscribe(data => {
    this.data = data;
  });
}

   ngGetEventById(){
     this.event = this.eventService.getEventById(this.route.snapshot.params['id'])
  }
}
