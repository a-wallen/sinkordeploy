"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteModel = void 0;
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/* CRUD methods:
Create: upvote or downvote a meme (create a vote and update a meme)
Read: to make sure a user hasn't voted twice on a meme
Update: user wants to toggle their vote (update a vote and update a meme)
Delete: delete a vote (delete vote and update a meme)
*/
class VoteModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            voteId: { type: String, required: true, index: { unique: true } },
            memeId: { type: String, required: true },
            userId: { type: String, required: true },
            voteValue: { type: Number, required: true },
            timestamp: { type: String, required: true },
        }, { collection: "votes" });
    }
    createModel() {
        this.model = mongooseConnection.model("Votes", this.schema);
    }
    // create vote: create a vote obj and update a meme/post
    // pre: user hasn't voted on this post before
    // post: vote created
    createVote(response, voteObject) {
        this.model
            .insertMany(voteObject)
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
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
    deleteVote(response, voteObject) {
        this.model
            .deleteOne({ voteId: voteObject["voteId"] })
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
}
exports.VoteModel = VoteModel;
