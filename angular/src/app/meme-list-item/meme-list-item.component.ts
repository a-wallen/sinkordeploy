import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

// import { ListsService } from "../list-service.service";
// import ITaskModelAngular from "../share/ITaskModelAngular";
// import IListModelAngular from "../share/IListModelAngular";
// import Item from "../share/Item";

//Added these
import IMemeModelAngular from "../share/IMemeModelAngular";
import ICommentModel from "../share/ICommentModelAngular";

import { MemeService } from "../meme.service";
import { CommentService } from "../comment.service";
import { UserService } from "app/user.service";

@Component({
  // moduleId: module.id,
  selector: 'app-meme-list-item',
  templateUrl: './meme-list-item.component.html',
  styleUrls: ['./meme-list-item.component.css']
})
export class MemeListItemComponent implements OnInit {
  userId: string;
  caption: string;
  totalVotes: Number;
  imageUrl: String;
  timePost: Date;
  commentIds: number[];

  @Input() memeId: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private meme$: MemeService,
    private comment$: CommentService,
    private user$: UserService,
  ) {
    this.commentIds = [];
  }

  ngOnInit(): void {
    this.meme$
      .getMemeDetails(this.memeId) //change this
      .subscribe(
        (result) => {
          this.userId = result[0]["userId"];
          this.caption = result[0]["caption"];
          this.totalVotes = result[0]["totalVotes"];
          this.imageUrl = result[0]["imageUrl"];
        },
        () => {},
        () => {}
      );
    this.comment$
      .fetchMemeComments(this.memeId)
      .subscribe((result) => {
        result.forEach(element => {
          this.commentIds.push(element["commentId"]);
        });
    },
    () => {},
    () => {});
    
  }

}
