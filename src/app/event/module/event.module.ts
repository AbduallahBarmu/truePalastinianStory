import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from '../components/time-line/time-line.component';
import { TimeLineEventComponent } from '../components/time-line-event/time-line-event.component';
import { EventService } from '../service/event.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TimeLineComponent, TimeLineEventComponent],
  providers:[EventService],
  imports: [
    HttpClientModule,
    CommonModule, 
    RouterModule
  ],
  exports:[TimeLineComponent]
})
export class EventModule { }
