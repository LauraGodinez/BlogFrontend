import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { Entries } from "../models/entries";

@Component({
  selector: "app-blog-entry",
  templateUrl: "./blog-entry.component.html",
  styleUrls: ["./blog-entry.component.scss"]
})
export class BlogEntryComponent implements OnInit {
  entry: Entries;
  id: number;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id");

    this.httpClient
      .get(`http://localhost:8080/entry/${this.id}`)
      .subscribe((resp: Entries) => {
        this.entry = resp;
      });
  }

  back(): void {
    this.location.back();
  }
}
