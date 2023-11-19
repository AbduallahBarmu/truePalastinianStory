import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from '../components/time-line/time-line.component';
import { TimeLineEventComponent } from '../components/time-line-event/time-line-event.component';



@NgModule({
  declarations: [TimeLineComponent, TimeLineEventComponent],
  imports: [
    CommonModule
  ], 
  exports:[TimeLineComponent]
})
export class EventModule { }
