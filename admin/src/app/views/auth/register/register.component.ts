import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private registerData: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public registerOjb = { username: "", email: "", password: "" };

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }

  // registerPassword(data: any) {
  //   console.warn(data);
  //   this.registerData.registerForm(data).subscribe((result) => {
  //     console.warn(result);
  //   })
  // }

  sendData() {
    console.log(this.registerOjb);
    this.registerData.registerForm(this.registerOjb).subscribe((result) => {
      console.warn(result);
    })
  }

  // convenience getter for easy access to form fields
  // get f() { return this.form.controls; }

  // onSubmit() {
  //   this.submitted = true;


  //   // stop here if form is invalid
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.registerData.registerForm(this.form.value)
  //     .pipe(first())
  //     .subscribe({
  //       next: () => {
  //         this.registerData.success('Registration successful', { keepAfterRouteChange: true });
  //         this.router.navigate(['../login'], { relativeTo: this.route });
  //       },
  //       error: error => {
  //         this.registerData.error(error);
  //         this.loading = false;
  //       }
  //     });
  // }
}
