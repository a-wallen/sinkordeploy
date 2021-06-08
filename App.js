"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const UserModel_1 = require("./model/UserModel");
const MemeModel_1 = require("./model/MemeModel");
const CommentModel_1 = require("./model/CommentModel");
const VoteModel_1 = require("./model/VoteModel");
const GooglePassport_1 = require("./GooglePassport");
const passport = require("passport");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.googlePassportObj = new GooglePassport_1.default();
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 102;
        //added these
        this.User = new UserModel_1.UserModel();
        this.Comment = new CommentModel_1.CommentModel();
        this.Meme = new MemeModel_1.MemeModel();
        this.Vote = new VoteModel_1.VoteModel();
    }
    // Configure Express middleware.
    middleware() {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: "keyboard cat" }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    }
    validateAuth(req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated. displayName : " + req.user.displayName);
            return next();
        }
        console.log("user is not authenticated");
        res.redirect("/");
    }
    getUserName(req, res) {
        //return
        if (req.isAuthenticated()) {
            console.log("User name :" + req.user.displayName);
            res.json(req.user.displayName);
            return;
        }
        else {
            //return not signed in
            res.json(null);
        }
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        //What do we need
        /*
        Create User
        Get User
        Authentication
        Create Post
        Get Post
        Delete Post
        Upvote
        Downvote
        get feed
        create comment
        update comment
        delete comment
        */
        // #################################################
        // ##############  OAUTH2 Methods   ################
        // #################################################
        router.get("/app/getUserSSO/", (req, res) => {
            console.log("enters app.ts get User SSO\n");
            this.getUserName(req, res);
        });
        router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));
        router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to meme page");
            res.redirect("/#/memes/day/2021-05-02T23%3A03%3A18.254%2B00%3A00"); // ----------------------------------------------------------change this
        });
        // #################################################
        // ##############  USERS METHODS    ################
        // #################################################
        //Create User
        router.post("/app/users/", (req, res) => {
            this.User.createUser(res, req.body);
        });
        //Get User Details
        router.get("/app/users/:userId/", async (req, res) => {
            this.User.retrieveUserDetails(res, { userId: req.params.userId });
        });
        router.put("/app/users/", (req, res) => {
            this.User.updateUserDetails(res, req.body);
        });
        router.delete("/app/users/", (req, res) => {
            this.User.deleteUser(res, req.body);
            this.Meme.deleteMeme(res, { userId: req.body["userId"] });
            this.Comment.deleteComment(res, { commentId: req.body["userId"] });
        });
        // #################################################
        // ##############  memes METHODS    ################
        // #################################################
        //create a post
        router.post("/app/memes/", (req, res) => {
            this.Meme.createPost(res, req.body);
        });
        //get individual post details by id
        router.get("/app/memes/:memeId/", this.validateAuth, async (req, res) => {
            //console.log("Console Log of Req" + req);
            // console.log("Cookies: ", req.cookies);
            this.Meme.retrieveMemeDetails(res, { memeId: req.params.memeId });
        });
        // //get individual post details by id
        // router.get("/app/memes/:memeId/", async (req, res) => {
        //   this.Meme.retrieveMemeDetails(res, { memeId: req.params.memeId });
        // });
        //load feed (get post by day)
        router.get("/app/memes/day/:day", (req, res) => {
            this.Meme.getFeed(res, { timePost: new Date(req.params.day) });
        });
        router.put("/app/memes/", (req, res) => {
            this.Meme.updatePostDetails(res, req.body);
        });
        router.delete("/app/memes/", (req, res) => {
            this.Meme.deleteMeme(res, req.body);
            this.Comment.deleteComment(res, { commentId: req.body["memeId"] });
        });
        // #################################################
        // ##############  COMMENT METHODS    ################
        // #################################################
        router.post("/app/comments/", (req, res) => {
            this.Comment.createComment(res, req.body);
        });
        router.get("/app/comments/:commentId", async (req, res) => {
            this.Comment.retrieveComment(res, { commentId: req.params.commentId });
        });
        //get all comments on a post
        router.get("/app/memes/comment/:memeId", async (req, res) => {
            this.Comment.retrieveComments(res, { memeId: req.params.memeId });
            // this.Comment.retrieveComment(res, req.body as ICommentModel);
        });
        router.put("/app/memes/comments/", (req, res) => {
            this.Comment.updateComment(res, req.body);
        });
        router.delete("/app/memes/comments/", (req, res) => {
            this.Comment.deleteComment(res, req.body);
        });
        // #################################################
        // ##############  VOTE METHODS    #################
        // #################################################
        router.post("/app/memes/votes/", (req, res) => {
            this.Vote.createVote(res, req.body);
        });
        router.delete("/app/memes/votes/", (req, res) => {
            this.Vote.deleteVote(res, req.body);
        });
        this.expressApp.use("/", router);
        this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
        this.expressApp.use("/images", express.static(__dirname + "/img"));
        this.expressApp.use("/", express.static(__dirname + "/angularSrc"));
    }
}
exports.App = App;
