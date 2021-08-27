import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  menu: any;
  tabmenu = [
    { name: 'User Management', status: '', action: '' },
    { name: 'Package History', status: '', action: '' },
    { name: 'Re-Password', status: '', action: '' },
    { name: 'Logout', status: '', action: '' },
  ];
  renderer: any;
  ActionShow: any;

  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];


  dataPacket = [
    {
      id: 1,
      pacId : "100-25000",
      pacName : "Medical Treatment -> Sport Medicine & Physical Therapy",
      status: "Success"
    },
    {
      id: 2,
      pacId : "100-25741",
      pacName : "Wellness Retreat -> Wellness Hotel",
      status: "Pending"
    }
  ];

  imageSrc: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.changeMenu('User Management');
  }

  changeMenu(tabname: any) {
    //console.log(tabname);
    this.tabmenu.forEach((item, i) => {
      if (tabname == "" || tabname == null) {
        this.tabmenu[i].status = '';
        this.tabmenu[i].action = 'hide';
      }
      else if (tabname == item.name) {
        this.tabmenu[i].status = 'active';
        this.tabmenu[i].action = 'show';
      }
      else if (tabname != item.name) {
        this.tabmenu[i].status = '';
        this.tabmenu[i].action = 'hide';
      }
    });

    this.ActionShow = this.showMenu(tabname);
    //console.log(this.ActionShow);
  }

  showMenu(str: string) {
    let result: any = this.tabmenu.filter(item => item.name == str)
    if (result.length > 0) {
      return result[0].name;
    } else {
      console.warn(`Can't find ${str} menu item`);
      return str;
    }
  }

  activeMenu(str: string) {
    let result: any = this.tabmenu.filter(item => item.name == str)
    if (result.length > 0) {
      return result[0].status;
    } else {
      console.warn(`Can't find ${str} menu item`);
      return '';
    }
  }

  onlogOut() {
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

  onDetail(row :any){
    console.log(row)
  }

  readFileImg(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
  }

  selectStar(value : any): void {
    // prevent multiple selection
    if (this.selectedRating === 0) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }
        return star;
      });
    }else{
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star-hover star';
        } else {
          star.class = 'star-gray star-hover star';
        }
        return star;
      });
    }
    this.selectedRating = value;
  }

}
