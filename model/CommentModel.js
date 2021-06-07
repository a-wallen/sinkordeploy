"use strict";
exports.__esModule = true;
exports.CommentModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/*
Comments model
CRUD
create: post a comment
read: view a comment
update: like a comment, edit a comment
delete: delete a comment
*/
var CommentModel = /** @class */ (function () {
    function CommentModel() {
        this.createSchema();
        this.createModel();
    }
    CommentModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            commentId: { type: String, required: true, index: { unique: true } },
            postId: { type: String, required: true },
            userId: { type: String, required: true },
            content: { type: String, required: true },
            timestamp: { type: String, required: true },
            likes: { type: Number }
        }, { collection: 'comments' });
    };
    CommentModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Comments", this.schema);
    };
    CommentModel.prototype.createComment = function (response, commentObject) {
        this.model.insertMany(commentObject)
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    CommentModel.prototype.retrieveComment = function (response, filter) {
        this.model.findOne(filter)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    // view a comment 
    CommentModel.prototype.retrieveComments = function (response, filterObj) {
        this.model.find(filterObj)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    CommentModel.prototype.updateComment = function (response, commentObject) {
        this.model.replaceOne({ commentId: commentObject["commentId"] }, commentObject)
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    // delete a comment 
    CommentModel.prototype.deleteComment = function (response, commentObject) {
        this.model.deleteMany({ commentId: commentObject["commentId"] })
            .then(function (result) {
            response.json(result);
        })["catch"](function (err) {
            response.json(err);
        });
    };
    return CommentModel;
}());
exports.CommentModel = CommentModel;
