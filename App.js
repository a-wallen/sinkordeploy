"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var UserModel_1 = require("./model/UserModel");
var MemeModel_1 = require("./model/MemeModel");
var CommentModel_1 = require("./model/CommentModel");
var VoteModel_1 = require("./model/VoteModel");
var GooglePassport_1 = require("./GooglePassport");
var passport = require("passport");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.googlePassportObj = new GooglePassport_1["default"]();
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
    App.prototype.middleware = function () {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: "keyboard cat" }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated. displayName : " + req.user.displayName);
            return next();
        }
        console.log("user is not authenticated");
        res.redirect("/");
    };
    App.prototype.getUserName = function (req, res) {
        //return
        if (req.isAuthenticated()) {
            console.log("User name :" + req.user.displayName);
            res.json(req.user.displayName);
            console.log(res);
            console.log(JSON.stringify(res));
            console.log("\n");
            console.log("\n");
            console.log("\n");
            return;
        }
        else {
            //return not signed in
            console.log("is this the fuck up\n");
            return res.json("Not signed in");
        }
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
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
        router.get("/app/getUserSSO/", function (req, res) {
            console.log("enters app.ts get User SSO\n");
            _this.getUserName(req, res);
        });
        router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));
        router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), function (req, res) {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to meme page");
            res.redirect("/#/memes/day/2021-05-02T23%3A03%3A18.254%2B00%3A00"); // ----------------------------------------------------------change this
        });
        // #################################################
        // ##############  USERS METHODS    ################
        // #################################################
        //Create User
        router.post("/app/users/", function (req, res) {
            _this.User.createUser(res, req.body);
        });
        //Get User Details
        router.get("/app/users/:userId/", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.User.retrieveUserDetails(res, { userId: req.params.userId });
                return [2 /*return*/];
            });
        }); });
        router.put("/app/users/", function (req, res) {
            _this.User.updateUserDetails(res, req.body);
        });
        router["delete"]("/app/users/", function (req, res) {
            _this.User.deleteUser(res, req.body);
            _this.Meme.deleteMeme(res, { userId: req.body["userId"] });
            _this.Comment.deleteComment(res, { commentId: req.body["userId"] });
        });
        // #################################################
        // ##############  memes METHODS    ################
        // #################################################
        //create a post
        router.post("/app/memes/", function (req, res) {
            _this.Meme.createPost(res, req.body);
        });
        //get individual post details by id
        router.get("/app/memes/:memeId/", this.validateAuth, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //console.log("Console Log of Req" + req);
                // console.log("Cookies: ", req.cookies);
                this.Meme.retrieveMemeDetails(res, { memeId: req.params.memeId });
                return [2 /*return*/];
            });
        }); });
        // //get individual post details by id
        // router.get("/app/memes/:memeId/", async (req, res) => {
        //   this.Meme.retrieveMemeDetails(res, { memeId: req.params.memeId });
        // });
        //load feed (get post by day)
        router.get("/app/memes/day/:day", function (req, res) {
            _this.Meme.getFeed(res, { timePost: new Date(req.params.day) });
        });
        router.put("/app/memes/", function (req, res) {
            _this.Meme.updatePostDetails(res, req.body);
        });
        router["delete"]("/app/memes/", function (req, res) {
            _this.Meme.deleteMeme(res, req.body);
            _this.Comment.deleteComment(res, { commentId: req.body["memeId"] });
        });
        // #################################################
        // ##############  COMMENT METHODS    ################
        // #################################################
        router.post("/app/comments/", function (req, res) {
            _this.Comment.createComment(res, req.body);
        });
        router.get("/app/comments/:commentId", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.Comment.retrieveComment(res, { commentId: req.params.commentId });
                return [2 /*return*/];
            });
        }); });
        //get all comments on a post
        router.get("/app/memes/comment/:memeId", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.Comment.retrieveComments(res, { memeId: req.params.memeId });
                return [2 /*return*/];
            });
        }); });
        router.put("/app/memes/comments/", function (req, res) {
            _this.Comment.updateComment(res, req.body);
        });
        router["delete"]("/app/memes/comments/", function (req, res) {
            _this.Comment.deleteComment(res, req.body);
        });
        // #################################################
        // ##############  VOTE METHODS    #################
        // #################################################
        router.post("/app/memes/votes/", function (req, res) {
            _this.Vote.createVote(res, req.body);
        });
        router["delete"]("/app/memes/votes/", function (req, res) {
            _this.Vote.deleteVote(res, req.body);
        });
        this.expressApp.use("/", router);
        this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
        this.expressApp.use("/images", express.static(__dirname + "/img"));
        this.expressApp.use("/", express.static(__dirname + "/angularSrc"));
    };
    return App;
}());
exports.App = App;
