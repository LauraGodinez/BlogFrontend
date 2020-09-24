import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Entries } from "../models/entries";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {
  entries: Entries[];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.httpClient
      .get("http://localhost:8080/entries")
      .subscribe((response: Entries[]) => {
        this.entries = response;
      });
  }

  viewEntry(id: number) {
    this.router.navigateByUrl(`/blog-entry/${id}`);
  }
}
