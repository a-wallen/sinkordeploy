"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/*
Comments model
CRUD
create: post a comment
read: view a comment
update: like a comment, edit a comment
delete: delete a comment
*/
class CommentModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            commentId: { type: String, required: true, index: { unique: true } },
            postId: { type: String, required: true },
            userId: { type: String, required: true },
            content: { type: String, required: true },
            timestamp: { type: String, required: true },
            likes: { type: Number }
        }, { collection: 'comments' });
    }
    createModel() {
        this.model = mongooseConnection.model("Comments", this.schema);
    }
    createComment(response, commentObject) {
        this.model.insertMany(commentObject)
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
    retrieveComment(response, filter) {
        this.model.findOne(filter)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }
    // view a comment 
    retrieveComments(response, filterObj) {
        this.model.find(filterObj)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }
    updateComment(response, commentObject) {
        this.model.replaceOne({ commentId: commentObject["commentId"] }, commentObject)
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
    // delete a comment 
    deleteComment(response, commentObject) {
        this.model.deleteMany({ commentId: commentObject["commentId"] })
            .then((result) => {
            response.json(result);
        })
            .catch((err) => {
            response.json(err);
        });
    }
}
exports.CommentModel = CommentModel;
