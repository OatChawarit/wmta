import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wmta';

  constructor(public translate: TranslateService) {
    // transLate.addLangs(['en', 'th']); 
    // transLate.setDefaultLang('en'); 
    // transLate.use('en');
   }
  
   switchLang(lang: string) {
    this.translate.use(lang);
    //this.changeLange();
  }

}


