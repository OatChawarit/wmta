import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wmta';
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    this.translate.addLangs(['en', 'th']); 
    this.translate.setDefaultLang('en');
  }
  // constructor(public transLate: TranslateService) {
  //   transLate.addLangs(['en', 'th']); 
  //   transLate.setDefaultLang('en'); 
  //   transLate.use('en');
  //   localStorage.setItem("setLang", 'en');
  //  }
  
   switchLang(lang: string) {
    this.translate.use(lang);
  }
}

