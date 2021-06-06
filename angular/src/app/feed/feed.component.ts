import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// //Added these
import IMemeModelAngular from "../share/IMemeModelAngular";
import { MemeService } from "../meme.service";
import { UserService } from "app/user.service";

@Component({
  // moduleId: module.id,
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userId: string;
  memes: IMemeModelAngular[];
  memeIds: String[];
  day: String;
  datetime: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private meme$: MemeService,
  ) { //change to current date later
    this.memeIds = []
  }

  ngOnInit(): void {
    this.datetime = this.route.snapshot.params["day"];
    console.log(this.datetime);
    this.meme$
      .getFeed(this.datetime) //change this
      .subscribe(
        (result) => {
          result.forEach(element => {
            this.memeIds.push(element["memeId"]);
          });
          console.log(this.memeIds)
        },
        () => {},
        () => {}
      );
  }

}
