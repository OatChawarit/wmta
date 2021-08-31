import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser: any = {
    username: 'NHSO-API-TEST',
    password: 'u9qf9yzDYF589WTA',
    device_token:'test_device_token'
  };


  constructor(private router: Router, private http: HttpClient,  private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
  }

  onLogin(form: FormBuilder): void {

  }

}
