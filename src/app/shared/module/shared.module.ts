import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule , 
    FontAwesomeModule
  ],
  exports:[NavbarComponent,FooterComponent]
})
export class SharedModule { }
