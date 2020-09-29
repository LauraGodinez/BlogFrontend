import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  isAuthenticatedVal = new BehaviorSubject<boolean>(false);

  constructor() {}

  setAuthenticated(): void {
    localStorage.setItem("authenticated", "true");
    this.isAuthenticatedVal.next(true);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedVal.asObservable().pipe(
      map(resp => {
        let authenticated = localStorage.getItem("authenticated");

        return authenticated === "true";
      })
    );
  }
}
