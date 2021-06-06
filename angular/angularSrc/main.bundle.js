webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <style>\r\n    /* Modify the background color */\r\n\r\n    .navbar-custom {\r\n      background-color: var(--primary-color);\r\n    }\r\n    /* Modify brand and text color */\r\n\r\n    .navbar-custom .navbar-brand,\r\n    .navbar-custom .navbar-text,\r\n    .navbar-custom .nav-link,\r\n    .navbar-custom .navbar-nav {\r\n      color: var(--secondary-light-color);\r\n    }\r\n  </style>\r\n\r\n  <link\r\n    href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\r\n    rel=\"stylesheet\"\r\n    integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\r\n    crossorigin=\"anonymous\"\r\n  />\r\n</head>\r\n\r\n<body>\r\n  <nav class=\"navbar navbar-custom\">\r\n    <div class=\"container-fluid\" style=\"color: var(--primary-color)\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" style=\"font-size: 250%\" href=\"/#\"\r\n          >SINK OR SWIM : Deploy</a\r\n        >\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" style=\"font-size: 200%\" href=\"#\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a\r\n              class=\"nav-link dropdown-toggle\"\r\n              style=\"font-size: 200%\"\r\n              href=\"#\"\r\n              id=\"navbardrop\"\r\n              data-toggle=\"dropdown\"\r\n            >\r\n              Archives\r\n            </a>\r\n            <!-- FOR SOME REASON THE DROPDOWN DOESN'T FUCKING WORK???????? time to give up on that shit -->\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" href=\"#\">Jump to Day</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Jump to Month</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Jump to Year</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a\r\n              href=\"#\"\r\n              style=\"color: var(--secondary-light-color); font-size: 200%\"\r\n              >Signed in User:\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(user$) {
        this.user$ = user$;
        this.title = "app works!";
    }
    AppComponent.prototype.testMethod = function () {
        console.log("calls test method");
        this.user$.getAuthUser();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__meme_meme_component__ = __webpack_require__("./src/app/meme/meme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__meme_service__ = __webpack_require__("./src/app/meme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__meme_list_item_meme_list_item_component__ = __webpack_require__("./src/app/meme-list-item/meme-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comment1_comment1_component__ = __webpack_require__("./src/app/comment1/comment1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_detail_user_detail_component__ = __webpack_require__("./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__comment_service__ = __webpack_require__("./src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var routes = [];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__meme_meme_component__["a" /* MemeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_11__meme_list_item_meme_list_item_component__["a" /* MemeListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__comment1_comment1_component__["a" /* Comment1Component */],
                __WEBPACK_IMPORTED_MODULE_14__user_detail_user_detail_component__["a" /* UserDetailComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]],
            //Aded meme service to the end of this
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* APP_BASE_HREF */], useValue: "/" },
                __WEBPACK_IMPORTED_MODULE_16__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__meme_service__["a" /* MemeService */],
                __WEBPACK_IMPORTED_MODULE_15__comment_service__["a" /* CommentService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meme_meme_component__ = __webpack_require__("./src/app/meme/meme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__ = __webpack_require__("./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");





var currentday = "2021-05-02T23:03:18.254+00:00";
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: "memes/day/:day", component: __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */] },
    { path: "memes/:memeId", component: __WEBPACK_IMPORTED_MODULE_1__meme_meme_component__["a" /* MemeComponent */] },
    { path: "users/:userId", component: __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__["a" /* UserDetailComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/app.routing.js.map

/***/ }),

/***/ "./src/app/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.fetchMemeComments = function (memeId) {
        return this.http
            .get("http://localhost:8080/app/memes/comment/" + memeId)
            .map(function (response) { return response.json(); });
    };
    CommentService.prototype.fetchCommentDetails = function (commentId) {
        return this.http
            .get("http://localhost:8080/app/comments/" + commentId)
            .map(function (response) { return response.json(); });
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], CommentService);
    return CommentService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/comment.service.js.map

/***/ }),

/***/ "./src/app/comment1/comment1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2 px-4\">\r\n    <img height=\"65\" src=\"{{avatar_url}}\"/>\r\n  </div>\r\n  <div class=\"col-md-10 px-5\">\r\n    <h4>\r\n      <strong>{{userName}}</strong>\r\n    </h4> \r\n    <p>{{content}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comment1/comment1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_comment_service__ = __webpack_require__("./src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Comment1Component = (function () {
    function Comment1Component(comment$, user$) {
        // fetch comment object
        this.comment$ = comment$;
        this.user$ = user$;
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
    Comment1Component.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.commentId);
        this.comment$.fetchCommentDetails(this.commentId).subscribe(function (commentObj) {
            if (commentObj == null)
                return;
            _this.content = commentObj["content"];
            _this.userId = commentObj["userId"];
            _this.user$.fetchUser(_this.userId).subscribe(function (usrObj) {
                if (usrObj == null)
                    return;
                _this.userName = usrObj["userName"];
                _this.avatar_url = usrObj["avatarUrl"];
            });
        }, function () { }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], Comment1Component.prototype, "commentId", void 0);
    Comment1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'feed-comment',
            template: __webpack_require__("./src/app/comment1/comment1.component.html"),
            styles: [__webpack_require__("./src/app/meme-list-item/meme-list-item.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_comment_service__["a" /* CommentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_comment_service__["a" /* CommentService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], Comment1Component);
    return Comment1Component;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/comment1.component.js.map

/***/ }),

/***/ "./src/app/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10\">\r\n      <!-- <app-meme *ngFor=\"let item of memes\" [memeModel]=\"meme\"></app-meme> -->\r\n<!-- \r\n      <app-meme memeId=\"4000\" [routerLink]=\"['/meme','4000']\"></app-meme> -->\r\n\r\n      <div *ngFor=\"let memeId of memeIds\"><app-meme-list-item memeId=\"{{memeId}}\"></app-meme-list-item></div>\r\n\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <div class=\"panel panel-default\">\r\n        <h4 class=\"text-muted\">this is where ads live</h4>\r\n        <img\r\n          src=\"https://imagizer.imageshack.com/v2/172x835q90/923/qUAmxP.png\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js\"></script>\r\n<script src=\"/script.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meme_service__ = __webpack_require__("./src/app/meme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedComponent = (function () {
    function FeedComponent(route, location, meme$) {
        this.route = route;
        this.location = location;
        this.meme$ = meme$;
        this.memeIds = [];
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datetime = this.route.snapshot.params["day"];
        console.log(this.datetime);
        this.meme$
            .getFeed(this.datetime) //change this
            .subscribe(function (result) {
            result.forEach(function (element) {
                _this.memeIds.push(element["memeId"]);
            });
            console.log(_this.memeIds);
        }, function () { }, function () { });
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* Component */])({
            // moduleId: module.id,
            selector: 'app-feed',
            template: __webpack_require__("./src/app/feed/feed.component.html"),
            styles: [__webpack_require__("./src/app/feed/feed.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */]) === 'function' && _c) || Object])
    ], FeedComponent);
    return FeedComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/feed.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat|Oswald|Poppins');\r\n  \r\n  * {\r\n      margin: 0px; \r\n      padding: 0px; \r\n      -webkit-box-sizing: border-box; \r\n              box-sizing: border-box;\r\n  }\r\n  \r\n  body, html {\r\n      height: 100%;\r\n      font-family: Poppins-Regular, sans-serif;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  a {\r\n      font-family: Poppins-Regular;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n      transition: all 0.4s;\r\n      -webkit-transition: all 0.4s;\r\n    -o-transition: all 0.4s;\r\n    -moz-transition: all 0.4s;\r\n  }\r\n  \r\n  a:focus {\r\n      outline: none !important;\r\n  }\r\n  \r\n  a:hover {\r\n      text-decoration: none;\r\n    color: #6675df;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  h1,h2,h3,h4,h5,h6 {\r\n      margin: 0px;\r\n  }\r\n  \r\n  p {\r\n      font-family: Poppins-Regular;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n  }\r\n  \r\n  ul, li {\r\n      margin: 0px;\r\n      list-style-type: none;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  input {\r\n      outline: none;\r\n      border: none;\r\n  }\r\n  \r\n  textarea {\r\n    outline: none;\r\n    border: none;\r\n  }\r\n  \r\n  textarea:focus, input:focus {\r\n    border-color: transparent !important;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  \r\n  input:focus:-moz-placeholder { color:transparent; }\r\n  \r\n  input:focus::-moz-placeholder { color:transparent; }\r\n  \r\n  input:focus:-ms-input-placeholder { color:transparent; }\r\n  \r\n  textarea:focus::-webkit-input-placeholder { color:transparent; }\r\n  \r\n  textarea:focus:-moz-placeholder { color:transparent; }\r\n  \r\n  textarea:focus::-moz-placeholder { color:transparent; }\r\n  \r\n  textarea:focus:-ms-input-placeholder { color:transparent; }\r\n  \r\n  input::-webkit-input-placeholder { color: #999999;}\r\n  \r\n  input:-moz-placeholder { color: #999999;}\r\n  \r\n  input::-moz-placeholder { color: #999999;}\r\n  \r\n  input:-ms-input-placeholder { color: #999999;}\r\n  \r\n  textarea::-webkit-input-placeholder { color: #999999;}\r\n  \r\n  textarea:-moz-placeholder { color: #999999;}\r\n  \r\n  textarea::-moz-placeholder { color: #999999;}\r\n  \r\n  textarea:-ms-input-placeholder { color: #999999;}\r\n  \r\n  label {\r\n    display: block;\r\n    margin: 0;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  button {\r\n      outline: none !important;\r\n      border: none;\r\n      background: transparent;\r\n  }\r\n  \r\n  button:hover {\r\n      cursor: pointer;\r\n  }\r\n  \r\n  iframe {\r\n      border: none !important;\r\n  }\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ utility ]*/\r\n  \r\n  /*==================================================================\r\n  [ Text ]*/\r\n  \r\n  .txt1 {\r\n    font-family: Montserrat-Regular;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    color: #555555;\r\n  }\r\n  \r\n  .txt2 {\r\n    font-family: Montserrat-Regular;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    color: #999999;\r\n  }\r\n  \r\n  /*==================================================================\r\n  [ Size ]*/\r\n  \r\n  .size1 {\r\n    width: 355px;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .size2 {\r\n    width: calc(100% - 43px);\r\n  }\r\n  \r\n  /*==================================================================\r\n  [ Background ]*/\r\n  \r\n  .bg1 {background: #3b5998;}\r\n  \r\n  .bg2 {background: #1da1f2;}\r\n  \r\n  .bg3 {background: #cd201f;}\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\r\n  \r\n  .limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background: #f2f2f2;\r\n  }\r\n  \r\n  .wrap-login100 {\r\n    width: 100%;\r\n    background: #fff;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n  \r\n  }\r\n  \r\n  /*==================================================================\r\n  [ login more ]*/\r\n  \r\n  .login100-more {\r\n    width: calc(100% - 560px);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .login100-more::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  /*==================================================================\r\n  [ Form ]*/\r\n  \r\n  .login100-form {\r\n    width: 560px;\r\n    min-height: 100vh;\r\n    display: block;\r\n    background-color: #f7f7f7;\r\n    padding: 173px 55px 55px 55px;\r\n  }\r\n  \r\n  .login100-form-title {\r\n    width: 100%;\r\n    display: block;\r\n    font-family: Poppins-Regular;\r\n    font-size: 30px;\r\n    color: #333333;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Input ]*/\r\n  \r\n  .wrap-input100 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n    width: 100%;\r\n    height: 80px;\r\n    position: relative;\r\n    border: 1px solid #e6e6e6;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .label-input100 {\r\n    font-family: Montserrat-Regular;\r\n    font-size: 18px;\r\n    color: #999999;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    width: 100%;\r\n    padding-left: 24px;\r\n    left: 0;\r\n    top: 30px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .input100 {\r\n    display: block;\r\n    width: 100%;\r\n    background: transparent;\r\n    font-family: Montserrat-Regular;\r\n    font-size: 18px;\r\n    color: #555555;\r\n    line-height: 1.2;\r\n    padding: 0 26px;\r\n  }\r\n  \r\n  input.input100 {\r\n    height: 100%;\r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  .focus-input100 {\r\n    position: absolute;\r\n    display: block;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% + 2px);\r\n    top: -1px;\r\n    left: -1px;\r\n    pointer-events: none;\r\n    border: 1px solid #6675df;\r\n    border-radius: 10px;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  \r\n    -webkit-transform: scaleX(1.1) scaleY(1.3);\r\n    transform: scaleX(1.1) scaleY(1.3);\r\n  }\r\n  \r\n  .input100:focus + .focus-input100 {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  \r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  \r\n  .eff-focus-selection {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  \r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  \r\n  .input100:focus {\r\n    height: 48px;\r\n  }\r\n  \r\n  .input100:focus + .focus-input100 + .label-input100 {\r\n    top: 14px;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .has-val {\r\n    height: 48px !important;\r\n  }\r\n  \r\n  .has-val + .focus-input100 + .label-input100 {\r\n    top: 14px;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  /*==================================================================\r\n  [ Restyle Checkbox ]*/\r\n  \r\n  .input-checkbox100 {\r\n    display: none;\r\n  }\r\n  \r\n  .label-checkbox100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 13px;\r\n    color: #999999;\r\n    line-height: 1.4;\r\n  \r\n    display: block;\r\n    position: relative;\r\n    padding-left: 26px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .label-checkbox100::before {\r\n    content: \"\\f00c\";\r\n    font-family: Montserrat-Regular;\r\n    font-size: 13px;\r\n    color: transparent;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    border: 1px solid #6675df;\r\n    left: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n  }\r\n  \r\n  .input-checkbox100:checked + .label-checkbox100::before {\r\n    color: #6675df;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Button ]*/\r\n  \r\n  .container-login100-form-btn {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n  .login100-form-btn {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 20px;\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 10px;\r\n    background: #F49722;\r\n  \r\n    font-family: Montserrat-Bold;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .login100-form-btn:hover {\r\n    background: #333333;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Responsive ]*/\r\n  \r\n  @media (max-width: 992px) {\r\n    .login100-form {\r\n      width: 50%;\r\n      padding-left: 30px;\r\n      padding-right: 30px;\r\n    }\r\n  \r\n    .login100-more {\r\n      width: 50%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .login100-form {\r\n      width: 100%;\r\n    }\r\n  \r\n    .login100-more {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 576px) {\r\n    .login100-form {\r\n      padding-left: 15px;\r\n      padding-right: 15px;\r\n      padding-top: 70px;\r\n    }\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n  \r\n  .validate-input {\r\n    position: relative;\r\n  }\r\n  \r\n  .alert-validate::before {\r\n    content: attr(data-validate);\r\n    position: absolute;\r\n    z-index: 100;\r\n    max-width: 70%;\r\n    background-color: #fff;\r\n    border: 1px solid #c80000;\r\n    border-radius: 2px;\r\n    padding: 4px 25px 4px 10px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 12px;\r\n    pointer-events: none;\r\n  \r\n    font-family: Poppins-Regular;\r\n    color: #c80000;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n  \r\n    -webkit-transition: opacity 0.4s;\r\n    transition: opacity 0.4s;\r\n  }\r\n  \r\n  .alert-validate::after {\r\n    content: \"\\f12a\";\r\n    font-family: Montserrat-Regular;\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 110;\r\n    color: #c80000;\r\n    font-size: 16px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 18px;\r\n  }\r\n  \r\n  .alert-validate:hover:before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .alert-validate::before {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  /*==================================================================\r\n  [ Social ]*/\r\n  \r\n  .login100-form-social-item {\r\n    width: 36px;\r\n    height: 36px;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .login100-form-social-item:hover {\r\n    background: #333333;\r\n    color: #fff;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<meta\r\n  name=\"google-signin-client_id\"\r\n  content=\"131963474491-f02cagbubq846imio4ujgpvf1ok38bom.apps.googleusercontent.com\"\r\n/>\r\n<script src=\"https://apis.google.com/js/platform.js\"></script>\r\n\r\n<body style=\"background-color: #666666\">\r\n  <div class=\"limiter\">\r\n    <div class=\"container-login100\">\r\n      <div class=\"wrap-login100\">\r\n        <form class=\"login100-form validate-form\">\r\n          <span class=\"login100-form-title p-b-43\"> Login to continue </span>\r\n          <div\r\n            class=\"wrap-input100 validate-input\"\r\n            data-validate=\"Valid email is required: ex@abc.xyz\"\r\n          >\r\n            <input class=\"input100\" type=\"text\" name=\"email\" />\r\n            <span class=\"focus-input100\"></span>\r\n            <span class=\"label-input100\">Email</span>\r\n          </div>\r\n          <div\r\n            class=\"wrap-input100 validate-input\"\r\n            data-validate=\"Password is required\"\r\n          >\r\n            <input class=\"input100\" type=\"password\" name=\"pass\" />\r\n            <span class=\"focus-input100\"></span>\r\n            <span class=\"label-input100\">Password</span>\r\n          </div>\r\n          <div class=\"flex-sb-m w-full p-t-3 p-b-32\">\r\n            <div class=\"contact100-form-checkbox\">\r\n              <input\r\n                class=\"input-checkbox100\"\r\n                id=\"ckb1\"\r\n                type=\"checkbox\"\r\n                name=\"remember-me\"\r\n              />\r\n              <label class=\"label-checkbox100\" for=\"ckb1\"> Remember me </label>\r\n            </div>\r\n            <div>\r\n              <a href=\"#\" class=\"txt1\"> Forgot Password? </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"container-login100-form-btn\">\r\n            <button\r\n              class=\"login100-form-btn\"\r\n              routerLink=\"../memes/day/2021-05-02T23:03:18.254+00:00\"\r\n            >\r\n              Login\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"text-center p-t-46 p-b-20\">\r\n            <span class=\"txt2\"> or sign up using </span>\r\n\r\n            <a\r\n              class=\"btn btn lg btn primary\"\r\n              href=\"http://localhost:8080/auth/google\"\r\n              role=\"button\"\r\n              >Google Login</a\r\n            >\r\n          </div>\r\n\r\n          <div class=\"login100-form-social flex-c-m\">\r\n            <a href=\"#\" class=\"login100-form-social-item flex-c-m bg1 m-r-5\">\r\n              <i class=\"fa fa-facebook-f\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"login100-form-social-item flex-c-m bg2 m-r-5\">\r\n              <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </form>\r\n        <div\r\n          class=\"login100-more\"\r\n          style=\"\r\n            background-image: url('https://artsybucket.com/wp-content/uploads/2020/08/1252Ff252F4252Ff252F1f4f2dc1f98ce910b07e81727060c2b8c85b5535_1598417615-416x583.jpg');\r\n          \"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \r\n  <script type=\"text/javascript\" async=\"\" src=\"https://www.google-analytics.com/analytics.js\"></script>\r\n  <script src=\"vendor/jquery/jquery-3.2.1.min.js\"></script>\r\n\r\n  <script src=\"vendor/animsition/js/animsition.min.js\"></script>\r\n\r\n  <script src=\"vendor/bootstrap/js/popper.js\"></script>\r\n  <script src=\"vendor/bootstrap/js/bootstrap.min.js\"></script>\r\n\r\n  <script src=\"vendor/select2/select2.min.js\"></script>\r\n\r\n  <script src=\"vendor/daterangepicker/moment.min.js\"></script>\r\n  <script src=\"vendor/daterangepicker/daterangepicker.js\"></script>\r\n\r\n  <script src=\"vendor/countdowntime/countdowntime.js\"></script>\r\n\r\n  <script src=\"js/main.js\"></script>\r\n\r\n  <script async=\"\" src=\"https://www.googletagmanager.com/gtag/js?id=UA-23581568-13\"></script>\r\n  <script>\r\n    window.dataLayer = window.dataLayer || [];\r\n    function gtag() { dataLayer.push(arguments); }\r\n    gtag('js', new Date());\r\n\r\n    gtag('config', 'UA-23581568-13');\r\n  </script>\r\n  <script defer=\"\" src=\"https://static.cloudflareinsights.com/beacon.min.js\"\r\n    data-cf-beacon=\"{&quot;rayId&quot;:&quot;65469ba35c99f4d4&quot;,&quot;token&quot;:&quot;cd0b4b3a733644fc843ef0b185f98241&quot;,&quot;version&quot;:&quot;2021.5.1&quot;,&quot;si&quot;:10}\"></script> -->\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/login.component.js.map

/***/ }),

/***/ "./src/app/meme-list-item/meme-list-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meme-list-item/meme-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-md-6\">\r\n      <!-- [routerLink]=\"['../memes/', {{memeId}}]\" -->\r\n      <img\r\n        \r\n        routerLink=\"../../../memes/{{memeId}}\"\r\n        width=\"450\"\r\n        src=\"{{imageUrl}}\"\r\n      />\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-2 px-4\">\r\n          <img\r\n            height=\"65\"\r\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KP47dPsz_bI91LkZalV1aMQf4720tshqOP92l1HgIDUp2d6j9f5rvOUi9TSGIXSoPnM&usqp=CAU\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-10 px-5\">\r\n          <h4>\r\n            <strong>{{userName}}</strong>\r\n          </h4>\r\n          <p>Dis me LMAO</p>\r\n        </div>\r\n      </div> -->\r\n      <div *ngFor=\"let commentId of commentIds\">\r\n        <feed-comment commentId=\"{{commentId}}\"></feed-comment>\r\n      </div>\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-2 px-4\">\r\n          <img\r\n            class=\"justify-right\"\r\n            height=\"65\"\r\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbLYColuAg_XtboZLoetQitFYt0pboFbc8d2T4KzblsH8_HaZvfdkwT-tGOCHrAo-GeQ&usqp=CAU\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-10 px-5\">\r\n          <label>joe_bob_fake</label>\r\n          <p>wow I can really relate</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 px-4\">\r\n          <img\r\n            height=\"65\"\r\n            src=\"https://www.minnesotangos.org/sites/default/files/Allie%20Baker%20Round_1.png\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-10 px-5\">\r\n          <label>another_loser</label>\r\n          <p>BURN THE HOUSE DOWN</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 px-4\">\r\n          <img\r\n            height=\"65\"\r\n            src=\"https://image.flaticon.com/icons/png/512/61/61205.png\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-10 px-5\">\r\n          <label>who_am_i</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Comment\"\r\n            id=\"usr\"\r\n          />\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"col-md-1\">\r\n      <!-- Buttons - upvote/downvote/comment -->\r\n    <div class=\"col-md-1\" id=\"buttons-col\">\r\n      <div id=\"upvote-button\" class=\"row\">\r\n        <input \r\n        type=\"image\" \r\n        src=\"https://i.ibb.co/1f0Vpm2/arrow-up.png\"\r\n        height=\"50\"\r\n        class=\"button\"\r\n        (click)=\"upvoteMethod()\"/>\r\n      </div>\r\n      <div id=\"downvote-button\" class=\"row\">\r\n        <input \r\n        type=\"image\" \r\n        src=\"https://i.ibb.co/xLN283n/arrow-down.png\"\r\n        height=\"50\"\r\n        class=\"button\"\r\n        (click)=\"downvoteMethod()\"/>\r\n      </div>\r\n      <div id=\"comment-button\" class=\"row\">\r\n        <input \r\n        type=\"image\" \r\n        src=\"https://i.ibb.co/qp19KYP/comment-button.png\"\r\n        height=\"50\"\r\n        class=\"button\"\r\n        (click)=\"addCommentMethod()\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/meme-list-item/meme-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemeListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meme_service__ = __webpack_require__("./src/app/meme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_service__ = __webpack_require__("./src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemeListItemComponent = (function () {
    function MemeListItemComponent(route, location, meme$, comment$, user$) {
        this.route = route;
        this.location = location;
        this.meme$ = meme$;
        this.comment$ = comment$;
        this.user$ = user$;
        this.commentIds = [];
    }
    MemeListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meme$
            .getMemeDetails(this.memeId) //change this
            .subscribe(function (result) {
            _this.userId = result[0]["userId"];
            _this.caption = result[0]["caption"];
            _this.totalVotes = result[0]["totalVotes"];
            _this.imageUrl = result[0]["imageUrl"];
        }, function () { }, function () { });
        this.comment$
            .fetchMemeComments(this.memeId)
            .subscribe(function (result) {
            result.forEach(function (element) {
                _this.commentIds.push(element["commentId"]);
            });
        }, function () { }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], MemeListItemComponent.prototype, "memeId", void 0);
    MemeListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* Component */])({
            // moduleId: module.id,
            selector: 'app-meme-list-item',
            template: __webpack_require__("./src/app/meme-list-item/meme-list-item.component.html"),
            styles: [__webpack_require__("./src/app/meme-list-item/meme-list-item.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__comment_service__["a" /* CommentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__comment_service__["a" /* CommentService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_app_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_app_user_service__["a" /* UserService */]) === 'function' && _e) || Object])
    ], MemeListItemComponent);
    return MemeListItemComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/meme-list-item.component.js.map

/***/ }),

/***/ "./src/app/meme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemeService = (function () {
    function MemeService(http) {
        this.http = http;
    }
    MemeService.prototype.getListsIndex = function () {
        return (this.http
            .get("http://localhost:8080/json/lists.json")
            .map(function (response) { return response.json(); }));
    };
    MemeService.prototype.getComments = function (memeId) {
        return this.http
            .get("http://localhost:8080/app/memes/comment/")
            .map(function (response) { return response.json(); });
    };
    MemeService.prototype.getMemeDetails = function (memeId) {
        return this.http
            .get("http://localhost:8080/app/memes/" + memeId)
            .map(function (response) { return response.json(); });
    };
    MemeService.prototype.getFeed = function (datetime) {
        return this.http
            .get("http://localhost:8080/app/memes/day/" + datetime)
            .map(function (response) {
            return response.json();
        });
    };
    MemeService.prototype.getUserInfo = function (userId) {
        return this.http
            .get("http://localhost:8080/app/users/" + userId)
            .map(function (data) {
            data["userId"];
        });
    };
    MemeService.prototype.upvote = function (memeId) {
        console.log("Upvote is called with memeID :" + memeId);
    };
    MemeService.prototype.downvote = function (memeId) {
        console.log("downvote is called with memeID :" + memeId);
    };
    MemeService.prototype.report = function (memeId) {
        console.log("report is called with memeID :" + memeId);
    };
    MemeService.prototype.getItems = function (index) {
        return (this.http
            .get("http://localhost:8080/json/lists/" + index + ".json")
            .map(function (response) { return response.json(); }));
    };
    MemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], MemeService);
    return MemeService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/meme.service.js.map

/***/ }),

/***/ "./src/app/meme/meme.component.css":
/***/ (function(module, exports) {

module.exports = ".test {\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n.button {\r\n  background-color: transparent; /* make the button transparent */\r\n  background-repeat: no-repeat; /* make the background image appear only once */\r\n  background-position: 0px 0px; /* equivalent to 'top left' */\r\n  border: none; /* assuming we don't want any borders */\r\n  cursor: pointer; /* make the cursor like hovering over an <a> element */\r\n  height: 50px; /* make this the size of your image */\r\n  width: 50x;\r\n  float: \"left\";\r\n  padding-left: 0px; /* make text start to the right of the image */\r\n  vertical-align: middle; /* align the text vertically centered */\r\n}\r\n.memeImage {\r\n  width: 500px;\r\n  height: 500px;\r\n  float: right;\r\n  padding: 10px;\r\n  border-radius: 50px;\r\n}\r\n.reportButton {\r\n  background-color: transparent; /* make the button transparent */\r\n  background-repeat: no-repeat; /* make the background image appear only once */\r\n  background-position: 0px 0px; /* equivalent to 'top left' */\r\n  border: none; /* assuming we don't want any borders */\r\n  cursor: pointer; /* make the cursor like hovering over an <a> element */\r\n  height: 50px; /* make this the size of your image */\r\n  width: 50x;\r\n  float: \"left\";\r\n  padding-left: 0px; /* make text start to the right of the image */\r\n  vertical-align: middle; /* align the text vertically centered */\r\n}\r\n"

/***/ }),

/***/ "./src/app/meme/meme.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"header\"></div>\r\n  <div class=\"body\">\r\n    <div class=\"sidebar\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div class=\"padding\"></div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <!-- Image/Meme-->\r\n            <!-- <img\r\n              src=\"https://cms.qz.com/wp-content/uploads/2018/07/meme-featured.jpg?quality=75&strip=all&w=900&h=900&crop=1\"\r\n              class=\"meme-image\"\r\n            /> -->\r\n            <img src=\"{{ imageUrl }}\" class=\"meme-image\" />\r\n            \r\n          </div>\r\n          <div class=\"row\">\r\n            <label style=\"font-size: 200%\">Caption: <var>{{ caption }}</var></label>\r\n            <!-- <label style=\"font-size: 200%\">THIS IS THE CAPTION SO FUNNY</label> -->\r\n          </div>\r\n          <div class=\"padding\"></div>\r\n          <!-- Upvote and Downvote button-->\r\n          <div class=\"row-md-2\">\r\n            <div class=\"col-md-1\">\r\n              <input\r\n                type=\"image\"\r\n                src=\"https://i.ibb.co/1f0Vpm2/arrow-up.png\"\r\n                height=\"50\"\r\n                class=\"button\"\r\n                (click)=\"upvoteMethod()\"\r\n              />\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n              <input\r\n                type=\"image\"\r\n                src=\"https://i.ibb.co/xLN283n/arrow-down.png\"\r\n                height=\"50\"\r\n                class=\"button\"\r\n                (click)=\"downvoteMethod()\"\r\n              />\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <!-- Report button-->\r\n              <input\r\n                type=\"image\"\r\n                src=\"https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_webpict50_1484337222-1.png\"\r\n                class=\"reportButton\"\r\n                (click)=\"reportMethod()\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <p><br />Votes: {{ totalVotes }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <label style=\"font-size: 200%\">Comments</label>\r\n      <p>\r\n        this is just placeholder for comments section for now please and thank\r\n        you\r\n      </p>\r\n      <!-- TODO add loop for comments -->\r\n      <!-- <app-comment1 memeId=\"4000\"></app-comment1> -->\r\n      <!-- <p>{{comments[0].content}}</p> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/meme/meme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meme_service__ = __webpack_require__("./src/app/meme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_comment_service__ = __webpack_require__("./src/app/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemeComponent = (function () {
    function MemeComponent(route, location, meme$, user$, comments$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.meme$ = meme$;
        this.user$ = user$;
        this.comments$ = comments$;
        this.memeId = route.snapshot.params["memeId"];
        //console.log(this.htmlmeme);
        meme$
            .getMemeDetails("4000") //change this----------------------
            .subscribe(function (result) {
            //this.memeModel = result[0];
            //console.log(this.htmlmeme);
            // console.log(result);
            //console.log("in component");
            _this.userId = result[0].userId;
            _this.caption = result[0].caption;
            _this.totalVotes = result[0].totalVotes;
            _this.imageUrl = result[0].imageUrl;
        });
        //
        // meme$
        //   .getUserInfo("42069") // const for userId
        //   .subscribe((result) => {
        //     //console.log(result);
        //     //console.log(result.userName);
        //     this.userName = result.userName;
        //   });
        // this.memeId = route.snapshot.params["memeId"];
        //Get Comments here as well
    }
    MemeComponent.prototype.upvoteMethod = function () {
        this.meme$.upvote(this.memeId);
    };
    MemeComponent.prototype.downvoteMethod = function () {
        this.meme$.downvote(this.memeId);
    };
    MemeComponent.prototype.reportMethod = function () {
        this.meme$.report(this.memeId);
    };
    MemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meme$
            .getMemeDetails(this.memeId) //change this----------------------------
            .subscribe(function (result) {
            if (result == null)
                return;
            _this.memeDetails = result[0];
            _this.userId = _this.memeDetails["userId"];
            _this.imageUrl = _this.memeDetails["imageUrl"];
            _this.caption = _this.memeDetails["caption"];
            _this.totalVotes = _this.memeDetails["totalVotes"];
            _this.reports = _this.memeDetails["reports"];
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
        function () { }, function () { });
        // this.comments$.fetchComments(this.memeId)
        // .subscribe(
        //   (result) => {
        //     this.comments = result
        //   }
        // )
    };
    MemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* Component */])({
            selector: "app-meme",
            template: __webpack_require__("./src/app/meme/meme.component.html"),
            styles: [__webpack_require__("./src/app/meme/meme.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */], __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7_app_comment_service__["a" /* CommentService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__meme_service__["a" /* MemeService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_app_comment_service__["a" /* CommentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_app_comment_service__["a" /* CommentService */]) === 'function' && _e) || Object])
    ], MemeComponent);
    return MemeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/meme.component.js.map

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page sidebar-collapse\">\r\n  <nav class=\"navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg\" color-on-scroll=\"100\" id=\"sectionsNav\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-translate\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"dropdown nav-item\">\r\n            <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\r\n              <i class=\"material-icons\">apps</i> Components\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-with-icons\">\r\n              <a href=\"../index.html\" class=\"dropdown-item\">\r\n                <i class=\"material-icons\">layers</i> All Components\r\n              </a>\r\n              <a href=\"https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html\" class=\"dropdown-item\">\r\n                <i class=\"material-icons\">content_paste</i> Documentation\r\n              </a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\" onclick=\"scrollToDownload()\">\r\n              <i class=\"material-icons\">cloud_download</i> Download\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\" data-original-title=\"Follow us on Twitter\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" data-original-title=\"Like us on Facebook\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\" data-original-title=\"Follow us on Instagram\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"page-header header-filter\" data-parallax=\"true\" style=\"background-image:url('https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg');\"></div>\r\n  <div class=\"main main-raised\">\r\n    <div class=\"profile-content\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 ml-auto mr-auto\">\r\n            <div class=\"profile\">\r\n              <div class=\"avatar\">\r\n                <img src=\"https://www.livelingua.com/img/profilesTeachers/103/Guillaume-Deneufbourg-Square_Profile_S.jpg\" alt=\"Circle Image\" class=\"img-raised rounded-circle img-fluid\">\r\n              </div>\r\n              <div class=\"name\">\r\n                <h3 class=\"title\">Christian Louboutin</h3>\r\n                <h6>Designer</h6>\r\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\r\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-pinterest\"><i class=\"fa fa-pinterest\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"follow\">\r\n            <button class=\"btn btn-fab btn-primary btn-round\" rel=\"tooltip\" title=\"\" data-original-title=\"Follow this user\">\r\n              <i class=\"material-icons\">add</i></button>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"description text-center\">\r\n          <p>An artist of considerable range, Chet Faker &#x2014; the name taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014; writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 ml-auto mr-auto\">\r\n            <div class=\"profile-tabs\">\r\n              <ul class=\"nav nav-pills nav-pills-icons justify-content-center\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link active\" href=\"#work\" role=\"tab\" data-toggle=\"tab\">\r\n                    <i class=\"material-icons\">palette</i> Work\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#studio\" role=\"tab\" data-toggle=\"tab\">\r\n                    <i class=\"material-icons\">camera</i> Studio\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#favorite\" role=\"tab\" data-toggle=\"tab\">\r\n                    <i class=\"material-icons\">favorite</i> Favorite\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content tab-space\">\r\n          <div class=\"tab-pane work active show\" id=\"work\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7 ml-auto mr-auto \">\r\n                <h4 class=\"title\">Latest Collections</h4>\r\n                <div class=\"row collections\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"card card-background\" style=\"background-image: url('http://www.ansa.it/webimages/img_457x/2018/1/9/2b87dfb4328e8a6f1dc643aa69af5fc9.jpg')\">\r\n                      <a href=\"#pablo\"></a>\r\n                      <div class=\"card-body\">\r\n                        <label class=\"badge badge-warning\">Spring 2016</label>\r\n                        <a href=\"#pablo\">\r\n                          <h2 class=\"card-title\">Stilleto</h2>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"card card-background\" style=\"background-image: url('https://i1.wp.com/blog.kakcho.com/wp-content/uploads/2017/12/xeanz6-l-610x610-jacket-tumblr-armygreenjacket-black-turtleneck-blackturtleneck-bag-blackbag-handbag-denim-jeans-bluejeans-pumps-.jpg')\">\r\n                      <a href=\"#pablo\"></a>\r\n                      <div class=\"card-body\">\r\n                        <label class=\"badge badge-info\">Spring 2016</label>\r\n                        <a href=\"#pablo\">\r\n                          <h2 class=\"card-title\">High Heels</h2>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"card card-background\" style=\"background-image: url('https://s3-eu-west-2.amazonaws.com/cadandthedandy/wp-content/uploads/2018/05/30130124/bespoke-business-suits-savile-row-3.jpg')\">\r\n                      <a href=\"#pablo\"></a>\r\n                      <div class=\"card-body\">\r\n                        <label class=\"badge badge-danger\">Summer 2016</label>\r\n                        <a href=\"#pablo\">\r\n                          <h2 class=\"card-title\">Flats</h2>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"card card-background\" style=\"background-image: url('http://www.backdownsouth.com/wp-content/uploads/2016/11/sockfancy004.jpg')\">\r\n                      <a href=\"#pablo\"></a>\r\n                      <div class=\"card-body\">\r\n                        <label class=\"badge badge-success\">Winter 2015</label>\r\n                        <a href=\"#pablo\">\r\n                          <h2 class=\"card-title\">Men's Sneakers</h2>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 mr-auto ml-auto stats\">\r\n                <h4 class=\"title\">Stats</h4>\r\n                <ul class=\"list-unstyled\">\r\n                  <li><b>60</b> Products</li>\r\n                  <li><b>4</b> Collections</li>\r\n                  <li><b>331</b> Influencers</li>\r\n                  <li><b>1.2K</b> Likes</li>\r\n                </ul>\r\n                <hr>\r\n                <h4 class=\"title\">About his Work</h4>\r\n                <p class=\"description\">French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered soles that have become his signature.</p>\r\n                <hr>\r\n                <h4 class=\"title\">Focus</h4>\r\n                <span class=\"badge badge-primary\">Footwear</span>\r\n                <span class=\"badge badge-rose\">Luxury</span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane connections\" id=\"studio\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 ml-auto mr-auto\">\r\n                <div class=\"card card-profile card-plain\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                      <div class=\"card-header card-header-image\">\r\n                        <a href=\"#pablo\">\r\n                          <img class=\"img\" src=\"http://www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg\">\r\n                        </a>\r\n                        <div class=\"colored-shadow\" style=\"background-image: url('http://www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg'); opacity: 1;\"></div></div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                      <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Anthon Jard</h4>\r\n                        <h6 class=\"card-category text-muted\">Model</h6>\r\n\r\n                        <p class=\"card-description\">\r\n                          Don't be scared of the truth because we need to restart the human foundation in truth...\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-5 mr-auto ml-auto\">\r\n                <div class=\"card card-profile card-plain\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                      <div class=\"card-header card-header-image\">\r\n                        <a href=\"#pablo\">\r\n                          <img class=\"img\" src=\"http://new.kevinrees.com/wp-content/uploads/2016/12/Kevin-Portrait-Square.jpg\">\r\n                        </a>\r\n                        <div class=\"colored-shadow\" style=\"background-image: url('http://new.kevinrees.com/wp-content/uploads/2016/12/Kevin-Portrait-Square.jpg'); opacity: 1;\"></div></div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                      <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Marc Jacobs</h4>\r\n                        <h6 class=\"card-category text-muted\">Designer</h6>\r\n\r\n                        <p class=\"card-description\">\r\n                          Don't be scared of the truth because we need to restart the human foundation in truth...\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 ml-auto mr-auto\">\r\n                <div class=\"card card-profile card-plain\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                      <div class=\"card-header card-header-image\">\r\n                        <a href=\"#pablo\">\r\n                          <img class=\"img\" src=\"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU3Nzk2NTA0Njc1ODIwNTQ5/rebbeca-marie-gomez-aka-becky-g-poses-for-a-portrait-at-the-2017-latin-american-music-awards-at-dolby-theatre-on-october-25-2017-in-hollywood-california-photo-by-gabriel-olsen_getty-images-square.jpg\">\r\n                        </a>\r\n                        <div class=\"colored-shadow\" style=\"background-image: url('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU3Nzk2NTA0Njc1ODIwNTQ5/rebbeca-marie-gomez-aka-becky-g-poses-for-a-portrait-at-the-2017-latin-american-music-awards-at-dolby-theatre-on-october-25-2017-in-hollywood-california-photo-by-gabriel-olsen_getty-images-square.jpg'); opacity: 1;\"></div></div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                      <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Kendall Jenner</h4>\r\n                        <h6 class=\"card-category text-muted\">Model</h6>\r\n\r\n                        <p class=\"card-description\">\r\n                          I love you like Kanye loves Kanye. Don't be scared of the truth.\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-5 ml-auto mr-auto\">\r\n                <div class=\"card card-profile card-plain\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                      <div class=\"card-header card-header-image\">\r\n                        <a href=\"#pablo\">\r\n                          <img class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jm45nkeAjmUPtmaxAKvFEMepzVTBQvDm2Y5MgcIOVcHY4iIR\">\r\n                        </a>\r\n                        <div class=\"colored-shadow\" style=\"background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jm45nkeAjmUPtmaxAKvFEMepzVTBQvDm2Y5MgcIOVcHY4iIR'); opacity: 1;\"></div></div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                      <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">George West</h4>\r\n                        <h6 class=\"card-category text-muted\">Model/DJ</h6>\r\n\r\n                        <p class=\"card-description\">\r\n                          I love you like Kanye loves Kanye.\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane text-center gallery\" id=\"favorite\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 ml-auto\">\r\n                <img src=\"http://www.globalfashionstreet.com/wp-content/uploads/2018/03/the-different-kinds-of-womens-street-fashion-style-1.jpg\" class=\"rounded\">\r\n                <img src=\"https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/08/street-style-mens-overcoat.jpg\" class=\"rounded\">\r\n              </div>\r\n              <div class=\"col-md-3 mr-auto\">\r\n                <img src=\"http://fashiongum.com/wp-content/uploads/2015/01/stilettos-summer-shoes-trend-6.jpg\" class=\"rounded\">\r\n                <img src=\"https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/06/pocket-square-how-to-1170x736.jpg\" class=\"rounded\">\r\n                <img src=\"https://rachealnaluyange.files.wordpress.com/2014/06/2012-fashion-bags-hot-women-s-handbag-b1462-women-s-handbag-vintage-one-shoulder-cross-body.jpg\" class=\"rounded\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer text-center\">\r\n   <p>Made with <a href=\"https://www.creative-tim.com/product/material-kit/?partner=101249\" target=\"_blank\">Material Kit</a> by Creative Tim</p>\r\n  </footer>\r\n</body>"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(user$, route) {
        this.user$ = user$;
        this.route = route;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.params["userId"];
        this.user$.fetchUser(this.userId).subscribe(function (result) {
            console.log(result);
        }, function () { }, function () { });
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("./src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("./src/app/user-detail/user-detail.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], UserDetailComponent);
    return UserDetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/user-detail.component.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.fetchUser = function (userId) {
        console.log("http://localhost:8080/app/users/" + userId);
        return this.http
            .get("http://localhost:8080/app/users/" + userId)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getAuthUser = function () {
        return this.http
            .get("http://localhost:8080/app/getUserSSO/")
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Saif/Documents/GitHub/sinkordeploy/angular/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map