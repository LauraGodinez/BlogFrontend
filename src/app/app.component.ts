import { Component } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "BlogFrontend";

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.isAuthenticated$().subscribe(t => {
      console.log({ t });
    });
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authenticationService.isAuthenticated$();
  }
}
