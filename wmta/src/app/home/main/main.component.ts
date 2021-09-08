import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../login/service/auth.service';

import { ServiceService } from '../../shared-service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrData: any = [];

  constructor(private AppServ: AppComponent, private router: Router, public translate: TranslateService,
    private sharedServ : ServiceService) {

  }

  ngOnInit(): void {
    //this.AppServ.translate.use('th');
    //this.AppServ.translate.addLangs(['en', 'th']);
    this.loadNews();
  }

  //เรียงจากท้ายสุด 3 อันดับแรกของข่าว
  async loadNews() {
    this.sharedServ.listNews().subscribe((res) => {
      //console.log(res);
      let sortdata = res.data.reverse();
      for(let i = 0; i < 3; i++){
        let sendData = {
          detail: sortdata[i].detail,
          id: sortdata[i].id,
          image: sortdata[i].image,
          shot_detail: sortdata[i].shot_detail,
          title: sortdata[i].title,
        }
        this.arrData.push(sendData);
      }
      //console.log(this.arrData);
    });
  }

  public loadScript() {
    console.log('preparing to load...')
    const node = document.createElement('script');
    node.src = 'assets/js/custom.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
