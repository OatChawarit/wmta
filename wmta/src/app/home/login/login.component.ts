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

  LoginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder,
    private authService: AuthService) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
    })
  }

  get password(): any { return this.LoginForm.get('password'); }
  get email(): any { return this.LoginForm.get('email'); }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.LoginForm.patchValue({
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password,
    });

    console.log(this.LoginForm.value);
    this.authService.login(this.LoginForm.value.email, this.LoginForm.value.password).subscribe((res) => {
      //console.log(res);
      if (res.status == "false") {
        console.log(res);
      } else {
        //console.log(res);
        this.authService.saveLocalStorage(res);
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      }
    })
  }

}
