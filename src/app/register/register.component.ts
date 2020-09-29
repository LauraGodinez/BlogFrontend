import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registrationFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.required)
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.registrationFormGroup.value);

    this.httpClient
      .post("http://localhost:8080/register", this.registrationFormGroup.value)
      .subscribe(response => {
        console.log(response);
      });
  }
}
