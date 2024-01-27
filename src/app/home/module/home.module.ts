import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { HomeComponent } from '../components/home/home.component';
import { EventModule } from 'src/app/event/module/event.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeroComponent, HomeComponent , ],
  imports: [
    CommonModule, 
    EventModule, 
    RouterModule
  ],
  exports:[HomeComponent]
})
export class HomedModule { }
