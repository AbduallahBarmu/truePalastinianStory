import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventProfileComponent } from './event/components/event-profile/event-profile.component';

const routes: Routes = [
  {path:'event-profile/:id', component:EventProfileComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
