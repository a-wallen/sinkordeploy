"use strict";
exports.__esModule = true;
exports.VoteModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/* CRUD methods:
Create: upvote or downvote a meme (create a vote and update a meme)
Read: to make sure a user hasn't voted twice on a meme
Update: user wants to toggle their vote (update a vote and update a meme)
Delete: delete a vote (delete vote and update a meme)
*/
var VoteModel = /** @class */ (function () {
    function VoteModel() {
        this.createSchema();
        this.createModel();
    }
    VoteModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            voteId: { type: String, required: true, index: { unique: true } },
            memeId: { type: String, required: true },
            userId: { type: String, required: true },
            voteValue: { type: Number, required: true },
            timestamp: { type: String, required: true }
        }, { collection: "votes" });
    };
    VoteModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Votes", this.schema);
    };
    // create vote: create a vote obj and update a meme/post
    // pre: user hasn't voted on this post before
    // post: vote created
    VoteModel.prototype.createVote = function (response, voteObject) {
        this.model
            .insertMany(voteObject)
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    //     // create vote: create a vote obj and update a meme/post
    // // pre: user hasn't voted on this post before
    // // post: vote created
    // public createVote(response: any, voteObject: IVoteModel) {
    //     this.model.insertMany(voteObject)
    //         .then((result) => { response.json(result); })
    //         .catch((err) => { response.json(err); });
    // }
    // delete vote: deletes a vote obj and updates a meme/post
    // pre: none
    VoteModel.prototype.deleteVote = function (response, voteObject) {
        this.model
            .deleteOne({ voteId: voteObject["voteId"] })
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    return VoteModel;
}());
exports.VoteModel = VoteModel;
