import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventProfileComponent } from "./event/components/event-profile/event-profile.component";
import { TimeLineEventComponent } from "./event/components/time-line-event/time-line-event.component";
import { HomeComponent } from "./home/components/home/home.component";
import { NotfoundsComponent } from "./home/components/notfounds/notfounds.component";
import { ResourcesComponent } from "./home/components/resources/resources.component";
import { LiveUpdatesComponent } from "./home/components/live-updates/live-updates.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, //default route
  // { path: '**', title:'404 Page Not Found', component:NotfoundsComponent},

  { path: "home", title: "home", component: HomeComponent },
  { path: "TimeLine", title: "events", component: TimeLineEventComponent },
  {
    path: "eventProfile/:id",
    title: "eventProfile",
    component: EventProfileComponent
  },

  { path: "resources", title: "resources", component: ResourcesComponent },
  {
    path: "liveUpdates",
    title: "LiveUpdatesComponent",
    component: LiveUpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
