import { Component } from "@angular/core";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-event-profile",
  templateUrl: "./event-profile.component.html",
  styleUrls: ["./event-profile.component.scss"]
})
export class EventProfileComponent {
  data: any[] = [];
  // id: number ;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ){
    
      // this.id = this.route.snapshot.paramMap.get(this.id);
    //  console.log(this.id), (this.baseApi = environment.baseApi);
  }
  ngOnInit(): void {
    // this.onGetEvent();
  }

  // async onGetEvent() {
  //   await this.eventService.getEventById(this.id);
  // }
}
