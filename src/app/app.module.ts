import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/module/shared.module";
import { HomedModule } from "./home/module/home.module";
import { EventProfileComponent } from "./event/components/event-profile/event-profile.component";
import { MaterialModule } from "./shared/module/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NotfoundsComponent } from "./home/components/notfounds/notfounds.component";

import { ResourcesComponent } from "./home/components/resources/resources.component";
import { LiveUpdatesComponent } from "./home/components/live-updates/live-updates.component";

@NgModule({
  declarations: [
    AppComponent,
    EventProfileComponent,
    NotfoundsComponent,
    ResourcesComponent,
    LiveUpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomedModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
