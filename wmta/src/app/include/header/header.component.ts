import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/home/login/service/auth.service';
import { ActivatedRoute,Router,Routes  } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public translate: TranslateService
    ) {

  }
  currentURL='';
  menu = [
    { name: 'home', status: '' },
    { name: 'concierge-service', status: '' },
    { name: 'Our Services', status: '' },
    { name: 'medical-treatment', status: '' },
    { name: 'elderly-care', status: '' },
    { name: 'rehabilitation-center', status: '' },
    { name: 'wellness-retreat', status: '' },
    { name: 'doctor', status: '' },
    { name: 'media-csr', status: '' },
    { name: 'cart', status: '' },
    { name: 'Join Us', status: '' },
    { name: 'about-us', status: '' },
    { name: 'contact-us', status: '' },
    { name: 'register-partner', status: '' }
  ];

  ngOnInit(): void {
    this.onload();
    let curURL : any = window.location.href;
    //console.log(curURL);
  }

  // คำสั่งสำหรับตอนโหลดครั้งแรกทั้งหมด
  onload():void {
    this.currentURL = window.location.href;
    //console.log(this.currentURL);
    this.menu.forEach((item,i)=> {
      let currents : any = this.currentURL.match(item.name);
      //console.log(currents);
      if(currents == "" || currents==null){
        this.menu[i].status=''
      }
      else if(currents[0] == "concierge-service"){
        this.menu[i].status='current-menu-item'
      } 
      else if(currents[0] == "home"){
        this.menu[i].status='current-menu-item'
      }
      else if(currents[0] == "medical-treatment" || currents[0] == "elderly-care" || currents[0] == "rehabilitation-center" || currents[0] == "wellness-retreat" || currents[0] == "doctor"){
        let val ="Our Services";
        var index = this.menu.findIndex(function(item, i){
          return item.name === val
        });
        this.menu[index].status='current-menu-item'
      }
      else if(currents[0] == "media-csr"){
        this.menu[i].status='current-menu-item'
      }
      else if(currents[0] == "cart"){
        this.menu[i].status='current-menu-item'
      }
      else if(currents[0] == "about-us" || currents[0] == "contact-us" || currents[0] == "register-partner"){
        let val ="Join Us";
        var index = this.menu.findIndex(function(item, i){
          return item.name === val
        });
        this.menu[index].status='current-menu-item'
      }     
    });
  }

    // Ex. P.dui
    // this.menu.forEach((item,i)=>{
    //   let currents = this.currentURL.search(item.name);
    //   console.log(currents);
    //   if(currents>=0) this.menu[i].status='current-menu-item';
    // });

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

  onlogOut(){
    Swal.fire({ //alert confirm แบบ sweetalert
      title: 'Confirm Log out ?',
      // text: 'ออกจากระบบ ใช่หรือไม่ ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cencel',
    }).then((val) => {

      if (val.value) {  
        this.router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
      }

    });
  }

}
