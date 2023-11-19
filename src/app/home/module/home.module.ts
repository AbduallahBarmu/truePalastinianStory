import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { HomeComponent } from '../components/home/home.component';
import { EventModule } from 'src/app/event/module/event.module';



@NgModule({
  declarations: [HeroComponent, HomeComponent],
  imports: [
    CommonModule, 
    EventModule
  ],
  exports:[HomeComponent]
})
export class HomedModule { }
