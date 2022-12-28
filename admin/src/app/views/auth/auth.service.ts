import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000/users/register';
  // private subject = new Subject<Alert>();
  // private defaultId = 'default-alert';
  // private userSubject: BehaviorSubject<User>;
  // public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    // this.user = this.userSubject.asObservable();
  }

  // public get userValue(): User {
  //   return this.userSubject.value;
  // }


  registerForm(data: any) {
    return this.http.post(this.url, data)
  }

  // enable subscribing to alerts observable

  // convenience methods
  // success(message: string, options?: any) {
  //   this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  // }

  // error(message: string, options?: any) {
  //   this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  // }

  // info(message: string, options?: any) {
  //   this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  // }

  // warn(message: string, options?: any) {
  //   this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  // }

  // // main alert method    
  // alert(alert: Alert) {
  //   alert.id = alert.id || this.defaultId;
  //   this.subject.next(alert);
  // }

  // // clear alerts
  // clear(id = this.defaultId) {
  //   this.subject.next(new Alert({ id }));
  // }

  // register(user: User) {
  //   return this.http.post(`${this.url}/users/register`, user);
  // }

}
