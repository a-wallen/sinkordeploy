import { Routes, RouterModule } from "@angular/router";

//Added this
import { MemeComponent } from "./meme/meme.component";
import { FeedComponent } from "./feed/feed.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { LoginComponent } from "./login/login.component";

const currentday = "2021-05-02T23:03:18.254+00:00";

const routes: Routes = [
  //probable need to change one of these for sso?
  //{ path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "memes/day/:day", component: FeedComponent },
  { path: "memes/:memeId", component: MemeComponent },
  { path: "users/:userId", component: UserDetailComponent },
];

export const routing = RouterModule.forRoot(routes);
