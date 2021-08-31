import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from './service/auth.service';

declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder,
    private authService: AuthService) {
    this.formLogin = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.formLogin.patchValue({
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    });

    console.log(this.formLogin.value);
    this.authService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((res) => {
      //console.log(res);
      if (res.status == "false") {
        console.log(res);
      } else {
        console.log(res);
        this.authService.saveLocalStorage(res);
      }
    })
  }

}
