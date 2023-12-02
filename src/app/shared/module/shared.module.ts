import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule , 
    FontAwesomeModule, 
    RouterModule
  ],
  exports:[NavbarComponent,FooterComponent]
})
export class SharedModule { }
