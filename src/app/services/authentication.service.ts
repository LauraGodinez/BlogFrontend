import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  isAuthenticatedVal = new BehaviorSubject<boolean>(false);

  constructor() {}

  setAuthenticated(): void {
    this.isAuthenticatedVal.next(true);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedVal
      .asObservable()
      .pipe(tap(resp => console.log(resp)));
  }
}
