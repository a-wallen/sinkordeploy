import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'app/comment.service';
import { UserService } from 'app/user.service'
import  ICommentModelAngular from "../share/ICommentModelAngular";
import  IUserModelAngular  from "../share/IUserModelAngular";

@Component({
  selector: 'feed-comment',
  templateUrl: './comment1.component.html',
  styleUrls: ['./../meme-list-item/meme-list-item.component.css'],
})
export class Comment1Component implements OnInit {
  commentObj: ICommentModelAngular;
  userId: string;
  content: string; 
  avatar_url: string;
  userName: string;
  userObj: IUserModelAngular;

  @Input() commentId: string;

  constructor( 
    private comment$: CommentService,
    private user$: UserService,
    ) { 
    // fetch comment object
    
    // fetch the user profile of the user that made the comment
    // user$.fetchUser(this.commentObj.userId).subscribe((jsonResult) => {
    //   if(jsonResult == null) return;
    //   this.userObj = jsonResult as IUserModelAngular;
    //   this.userObj.avatar_url = jsonResult.avatar_url;
    // },
    // () => {},
    // () => {},
    // );
  }

  ngOnInit() {
    console.log(this.commentId);
    this.comment$.fetchCommentDetails(this.commentId).subscribe((commentObj) => {
      if(commentObj == null) return;
      this.content = commentObj["content"];
      this.userId = commentObj["userId"];
      this.user$.fetchUser(this.userId).subscribe((usrObj) => {
        if(usrObj == null) return;
        this.userName = usrObj["userName"];
        this.avatar_url = usrObj["avatarUrl"];
      })
    },
    () => {},
    () => {},
    );
  }

}
