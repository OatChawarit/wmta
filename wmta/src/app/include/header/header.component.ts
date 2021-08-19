import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/home/login/service/auth.service';
import { ActivatedRoute,Router,Routes  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 


  constructor(
    private AppServ : AppComponent,
    private route : ActivatedRoute,
    private router : Router,
    ) {

  }
  currentURL='';
  menu = [
    {name: 'home',status:''},
    {name: 'concierge-service',status:''},
    {name: 'Our Services',status:''},
  ];

  ngOnInit(): void {
    this.onload();
  }

  // คำสั่งสำหรับตอนโหลดครั้งแรกทั้งหมด
  onload():void {
    this.currentURL = window.location.href;
    this.menu.forEach((item,i)=>{
      let currents = this.currentURL.search(item.name);
      if(currents>=0) this.menu[i].status='current-menu-item';
    });
  }


  switchLang(lang: string) {
    this.AppServ.switchLang(lang);
  }


  /**
   * คำสั่ง ActiveMenu
   * @param str ชื่อเมนูกำหนดให้ตรงกับ ตัวแปล Menu
   * @returns ระบบจะ return menu.status ให้ ถ้าเจอ ถ้าไม่เจอจะส่งค่าว่างกลับ  
   */
  activeMenu(str:string) {
    let result :any =  this.menu.filter(item=> item.name == str)
    if(result.length > 0) {
    return result[0].status;
    }else{
      console.warn(`Can't find ${str} menu item`);
      return '';
    }
  }

}
