"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemeModel = void 0;
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
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
class MemeModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            memeId: { type: String, required: true, index: { unique: true } },
            userId: { type: String, required: true },
            totalVotes: { type: Number, required: true },
            imageUrl: { type: String, required: true },
            caption: { type: String },
            timePost: { type: Date },
            reports: { type: Number },
        }, { collection: "memes" });
    }
    createModel() {
        this.model = mongooseConnection.model("Meme", this.schema);
    }
    createPost(response, memeObject) {
        this.model
            .insertMany(memeObject)
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
    // get a post (via post id)
    retrieveMemeDetails(response, filter) {
        return this.model.find(filter)
            .then((result) => response.json(result))
            .catch((err) => response.json(err));
    }
    getFeed(response, filter) {
        this.model
            .find(filter)
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
    updatePostDetails(response, memeObject) {
        this.model
            .replaceOne({ memeId: memeObject["postId"] }, memeObject)
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
    // This function is created to increment a meme's vote
    // Params: memeId, voteValue
    // returns: json
    //CHANGED memeID TO STRING INSTEAD OF A NUMBER
    voteMeme(response, memeId, voteValue) {
        this.model
            .findByIdAndUpdate(memeId, { $inc: { totalVotes: voteValue } }, { new: true })
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
    // delete a post (via post id)
    // TODO: update user info by number of posts
    deleteMeme(response, memeObject) {
        this.model
            .deleteMany({ memeId: memeObject["memeId"] })
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
}
exports.MemeModel = MemeModel;
