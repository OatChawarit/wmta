import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../home/login/service/auth.service'
import { ServiceService } from '../service/service.service';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  imageSrc: any;
  registerHospital : FormGroup;
  
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder,
    private servRegister : ServiceService, private authService: AuthService) { 

      this.registerHospital = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required, Validators.minLength(6)],
        fname: [''],
        lname: [''],
        age : [''],
        sex: [''],
        phone: [''],
        line:  [''],
        type: ['2'],  //0=สมาชิกทั่วไป 1=โรงแรม 2=โรงบาล
        image: [''],
        file: [''],
      });

    }

  ngOnInit(): void {

  }


  uploadBtn() : void {
    //console.log("click");
    $(".file-upload").click();
  }

  readFileImg(event: any): void {
    var filename = $('#fileimg').val().replace('C:\\fakepath\\','');
    //console.log(event);
    //console.log(filename);
    this.registerHospital.patchValue({
       image: filename
    });
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
  }
  

      
  get emailHospital(): any { return this.registerHospital.get('email'); }
  get passwordHospital(): any { return this.registerHospital.get('password'); }
  get fnameHospital(): any { return this.registerHospital.get('fname'); }
  get ageHospital(): any { return this.registerHospital.get('age'); }
  get sexHospital(): any { return this.registerHospital.get('sex'); }
  get phoneHospital(): any { return this.registerHospital.get('phone'); }
  get lineHospital(): any { return this.registerHospital.get('line'); }
  get typeHospital(): any { return this.registerHospital.get('type'); }
  get imageHospital(): any { return this.registerHospital.get('image'); }
  get fileHospital(): any { return this.registerHospital.get('file'); }

}
