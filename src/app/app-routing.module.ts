import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventProfileComponent } from "./event/components/event-profile/event-profile.component";
import { TimeLineEventComponent } from "./event/components/time-line-event/time-line-event.component";
import { HomeComponent } from "./home/components/home/home.component";
import { NotfoundsComponent } from "./home/components/notfounds/notfounds.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, //default route
  { path: "home", title:'home', component:HomeComponent},
  { path: "TimeLine",title: "events", component: TimeLineEventComponent},
  { path: "eventProfile/:id", title: "event Profile",component: EventProfileComponent},
  { path: '**', title:'404 Page Not Found', component:NotfoundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
