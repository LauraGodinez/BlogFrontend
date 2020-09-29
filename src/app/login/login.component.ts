import { Component, OnInit } from "@angular/core";
import { Users } from "../models/users";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  users: Users[];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.httpClient
      .get("http://localhost:8080/user")
      .subscribe((response: Users[]) => {
        this.users = response;
      });
  }
}
