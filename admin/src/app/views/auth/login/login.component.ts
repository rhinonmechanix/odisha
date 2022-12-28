import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { stringify } from "querystring";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    private loginData: AuthService,
    private router: Router
  ) { }

  resultData: any = '';
  token: any = '';

  public loginObj = { username: "", password: "" };

  ngOnInit(): void { }

  sendData() {
    console.log(this.loginObj);
    this.loginData.loginForm(this.loginObj).subscribe((result) => {
      this.resultData = result
      this.token = this.resultData.data.token
      console.log(this.token);
      localStorage.setItem('token', this.token)
      this.router.navigate(['/admin/dashboard'])
    })
  }
}
