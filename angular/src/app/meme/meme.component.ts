import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Optional } from "@angular/core";

//Added these
import IMemeModelAngular from "../share/IMemeModelAngular";
import { MemeService } from "../meme.service";

import IUserModelAngular from "../share/IUserModelAngular";
import { UserService } from "../user.service";
import ICommentModelAngular from "app/share/ICommentModelAngular";
import { CommentService } from "app/comment.service";
import { Comment1Component } from "app/comment1/comment1.component";

@Component({
  moduleId: module.id,
  selector: "app-meme",
  templateUrl: "./meme.component.html",
  styleUrls: ["./meme.component.css"],
  providers: [MemeService, UserService, CommentService],
})
export class MemeComponent implements OnInit {
  public memeId: string;
  memeDetails: IMemeModelAngular;
  userId: string;
  imageUrl: string;
  caption: string;
  totalVotes: number;
  reports: number;
  comments: ICommentModelAngular[];
  commentIds: string[];
  userDetails: IUserModelAngular;
  userName: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private meme$: MemeService,
    private user$: UserService,
    private comment$: CommentService
  ) {
    this.memeId = route.snapshot.params["memeId"];
    this.commentIds = [];
  }

  upvoteMethod() {
    this.meme$.upvote(this.memeId);
  }

  downvoteMethod() {
    this.meme$.downvote(this.memeId);
  }

  reportMethod() {
    this.meme$.report(this.memeId);
  }

  ngOnInit(): void {
    this.meme$
      .getMemeDetails(this.memeId) //change this----------------------------
      .subscribe(
        (result) => {
          if (result == null) return;
          this.memeDetails = result[0] as IMemeModelAngular;
          this.userId = this.memeDetails["userId"];
          this.imageUrl = this.memeDetails["imageUrl"];
          this.caption = this.memeDetails["caption"];
          this.totalVotes = this.memeDetails["totalVotes"];
          this.reports = this.memeDetails["reports"];
        },
        // this.user$
        // .fetchUser(this.userId)
        // .subscribe((result) => {
        //   console.log(result);
        //   if(result == null) return;
        //   this.userDetails = result[0] as IUserModelAngular;
        //   this.userName = this.userDetails["userName"];
        // },
        // () => {},
        // () => {});

        () => { },
        () => { }
      );
    this.comment$
      .fetchMemeComments(this.memeId)
      .subscribe((result) => {
        console.log(result);
        result.forEach(element => {
          this.commentIds.push(element["commentId"]);
        });
      },
        () => { },
        () => { });
  }
}
