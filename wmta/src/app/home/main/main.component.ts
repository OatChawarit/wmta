import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  translate : any;
  constructor(private trans: TranslateService,
    private AppServ : AppComponent) { 
      
    }

  ngOnInit(): void {
   
  }

}
