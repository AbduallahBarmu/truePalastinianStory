import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-time-line-event',
  templateUrl: './time-line-event.component.html',
  styleUrls: ['./time-line-event.component.scss']
})
export class TimeLineEventComponent {
  data: any[] = [];
  
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getData().subscribe(data => {
      this.data = data;
    });

  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
