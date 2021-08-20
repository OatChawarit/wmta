import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private AppServ: AppComponent, private router: Router, public translate: TranslateService) {

  }

  ngOnInit(): void {
    //this.AppServ.translate.use('th');
    //this.AppServ.translate.addLangs(['en', 'th']);
  }

}
