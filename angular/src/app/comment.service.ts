import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  fetchMemeComments(memeId: string){
    return this.http
      .get("http://localhost:8080/app/memes/comment/"+ memeId)
      .map((response) => response.json());
  }

  fetchCommentDetails(commentId: string) {
    return this.http
      .get("http://localhost:8080/app/comments/" + commentId)
      .map((response) => response.json());
  }
}

