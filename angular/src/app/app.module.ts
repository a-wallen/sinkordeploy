import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";
import { routing } from "./app.routing";

import { MemeComponent } from "./meme/meme.component";
import { MemeService } from "./meme.service";
import { FeedComponent } from "./feed/feed.component";
import { MemeListItemComponent } from "./meme-list-item/meme-list-item.component";
import { LoginComponent } from "./login/login.component";
import { Comment1Component } from "./comment1/comment1.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

import { CommentService } from "./comment.service";
import { UserService } from "./user.service";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    FeedComponent,
    MemeListItemComponent,
    LoginComponent,
    Comment1Component,
    UserDetailComponent,
  ],

  //added SSO import at end --- Saif
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
  //Aded meme service to the end of this
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    UserService,
    MemeService,
    CommentService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
