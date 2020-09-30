import { Component, OnInit } from "@angular/core";
import { Entries } from "../models/entries";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  createFormGroup: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required)
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.createFormGroup.value);
  }
}
