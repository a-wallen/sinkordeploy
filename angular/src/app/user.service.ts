import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  fetchUser(userId: string) {
    console.log("http://localhost:8080/app/users/" + userId);
    return this.http
      .get("http://localhost:8080/app/users/" + userId)
      .map((response) => response.json());
  }

  //do I need to add routes to the sso stuff here?
}
