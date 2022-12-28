import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl: string = environment.baseUrl + "/users/register";
  private loginUrl: string = environment.baseUrl + "/users/login";

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  // register URL
  registerForm(data: any) {
    return this.http.post(this.registerUrl, data)
  }

  loginForm(data: any) {
    return this.http.post(this.loginUrl, data)
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

}
