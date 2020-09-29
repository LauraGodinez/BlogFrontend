import { Component, OnInit } from "@angular/core";
import { Users } from "../models/users";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.required)
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.loginFormGroup.value);

    this.httpClient
      .post("http://localhost:8080/login", this.loginFormGroup.value)
      .subscribe(response => {
        console.log(response);
      });
  }
}
