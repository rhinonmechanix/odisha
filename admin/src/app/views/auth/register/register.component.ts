import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerData: AuthService,
    private router: Router
  ) { }

  public registerOjb = { username: "", email: "", password: "" };

  ngOnInit() {
  }

  sendData() {
    console.log(this.registerOjb);
    this.registerData.registerForm(this.registerOjb).subscribe((result) => {
      console.warn(result);
    })
    this.router.navigate(['/auth/login'])
  }
}
