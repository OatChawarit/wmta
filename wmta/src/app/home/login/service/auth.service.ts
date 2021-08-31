import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import Swal from 'sweetalert2';

const helper = new JwtHelperService();
const AUTH_API = environment.API_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private user : any;

  constructor(private http: HttpClient, private router: Router) {
    //this.checkToken();
  } 

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  

  public checkToken(): void {
    const user = JSON.parse(localStorage.getItem('user') || '0');
    if (user) {
      const isExpired = helper.isTokenExpired(user.token);
      if (isExpired) {
        this.logout();
      } else {
        this.user.next(user);
      }
    } else {
      this.logout();
    }
  }

  public saveLocalStorage(user: UserResponse): void {
    const { email, message, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  
  logout(): void {
    localStorage.removeItem('user');
    //this.user.next(null);
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}

export interface User {
  email: any;
  password: any;
}

export interface UserResponse extends User {
  code: any;
  status: any;
  message: any;
  token: any;
  data: [];
}

