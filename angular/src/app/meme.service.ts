import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class MemeService {
  constructor(private http: Http) {}

  getListsIndex() {
    return (
      this.http
        .get("http://localhost:8080/json/lists.json")
        //    return this.http.get( '/app/list/')
        .map((response) => response.json())
    );
  }

  getComments(memeId: String) {
    return this.http
      .get("http://localhost:8080/app/memes/comment/")
      .map((response) => response.json());
  }

  getMemeDetails(memeId: String) {
    return this.http
      .get("http://localhost:8080/app/memes/" + memeId)
      .map((response) => response.json());
  }

  getFeed(datetime: String) {
    return this.http
      .get("http://localhost:8080/app/memes/day/" + datetime)
      .map((response) => response.json());
  }

  getUserInfo(userId: string) {
    return this.http
      .get("http://localhost:8080/app/users/" + userId)
      .map((data) => {
        data["userId"];
      });
  }

  upvote(memeId: String) {
    console.log("Upvote is called with memeID :" + memeId);
  }
  downvote(memeId: String) {
    console.log("downvote is called with memeID :" + memeId);
  }
  report(memeId: String) {
    console.log("report is called with memeID :" + memeId);
  }

  getItems(index: string) {
    return (
      this.http
        .get("http://localhost:8080/json/lists/" + index + ".json")
        //    return this.http.get( '/app/list/' + index)
        .map((response) => response.json())
    );
  }
}
