import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared-service/service.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  arrData: any = [];
  constructor(private router: Router, private http: HttpClient, private sharedServ : SharedService) {

  }

  ngOnInit(): void {
    this.loadNews();
  }

  async loadNews() {
    Swal.fire({
      title: 'Please Wait !',
      html: 'Loading data...',// add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen : () => {
          Swal.showLoading()
      },
    });
    this.sharedServ.listNews().subscribe((res) => {
      //console.log(res);
      this.arrData = res.data.reverse();
      Swal.close();
    });
  }

  goNewBlog(id : any): void{
    console.log(id);
    this.router.navigate(['health-blog/', id]);
  }

}
