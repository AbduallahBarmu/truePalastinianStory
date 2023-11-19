import { Component } from '@angular/core';

import { faLinkedin , faTwitter , faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  
})
export class FooterComponent {
  LinkIcon = faLinkedin;
  twitIcon = faTwitter; 
  youIcon = faYoutube ; 
  instIcon = faInstagram; 
}
