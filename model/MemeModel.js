"use strict";
exports.__esModule = true;
exports.MemeModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/* Post Methods
// TODO: update user info by number of posts
CRUD
Create: create a post
read: getting posts: getting posts by feed, by a user
read: view comments by postId... with a collection?
- query feed collection for feed (by current day), that object has a
feedId that we can use as a query parameter for the post collection
- find feedId given the current day --> from feedId, find the posts with that feed id
^^^ (NOT A PART OF A CLASS... RN)
- get current feedID byt he day for a new post
update: vote, update caption, get reported
delete: delete a post (done by a user or when a user account gets deleted?)
*/
var MemeModel = /** @class */ (function () {
    function MemeModel() {
        this.createSchema();
        this.createModel();
    }
    MemeModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            memeId: { type: String, required: true, index: { unique: true } },
            userId: { type: String, required: true },
            totalVotes: { type: Number, required: true },
            imageUrl: { type: String, required: true },
            caption: { type: String },
            timePost: { type: Date },
            reports: { type: Number }
        }, { collection: "memes" });
    };
    MemeModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Meme", this.schema);
    };
    MemeModel.prototype.createPost = function (response, memeObject) {
        this.model
            .insertMany(memeObject)
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    // get a post (via post id)
    MemeModel.prototype.retrieveMemeDetails = function (response, filter) {
        return this.model.find(filter)
            .then(function (result) { return response.json(result); })["catch"](function (err) { return response.json(err); });
    };
    MemeModel.prototype.getFeed = function (response, filter) {
        this.model
            .find(filter)
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    MemeModel.prototype.updatePostDetails = function (response, memeObject) {
        this.model
            .replaceOne({ memeId: memeObject["postId"] }, memeObject)
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    // This function is created to increment a meme's vote
    // Params: memeId, voteValue
    // returns: json
    //CHANGED memeID TO STRING INSTEAD OF A NUMBER
    MemeModel.prototype.voteMeme = function (response, memeId, voteValue) {
        this.model
            .findByIdAndUpdate(memeId, { $inc: { totalVotes: voteValue } }, { "new": true })
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    // delete a post (via post id)
    // TODO: update user info by number of posts
    MemeModel.prototype.deleteMeme = function (response, memeObject) {
        this.model
            .deleteMany({ memeId: memeObject["memeId"] })
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    return MemeModel;
}());
exports.MemeModel = MemeModel;
